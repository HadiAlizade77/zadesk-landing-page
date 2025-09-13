pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = '91.98.136.233:30501'
        APP_NAME = 'landing-page'
        IMAGE_NAME = 'landing-page'
        GITOPS_REPO = '/opt/gitops-manifests'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                    env.IMAGE_TAG = env.GIT_COMMIT.take(8)
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    dir('apps/landing_page') {
                        sh 'npm ci'
                        sh 'npm run lint'
                        // Add more tests as needed
                    }
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    dir('apps/landing_page') {
                        def image = docker.build("${env.DOCKER_REGISTRY}/${env.APP_NAME}:${env.IMAGE_TAG}")
                        docker.withRegistry("https://${env.DOCKER_REGISTRY}", 'docker-registry-credentials') {
                            image.push()
                            image.push('latest')
                        }
                    }
                }
            }
        }
        
        stage('Update K8s Manifests') {
            steps {
                script {
                    dir(env.K8S_MANIFEST_PATH) {
                        sh """
                            # Update the image tag in kustomization.yaml
                            sed -i 's|newTag:.*|newTag: ${env.IMAGE_TAG}|' kustomization.yaml
                        """
                        
                        // Commit and push the changes
                        sh """
                            git config user.name "Jenkins"
                            git config user.email "jenkins@lilidesk.com"
                            git add .
                            git commit -m "Update ${env.APP_NAME} image to ${env.IMAGE_TAG}" || true
                            git push origin main
                        """
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    // Deploy to staging namespace
                    sh """
                        kubectl apply -k ${env.K8S_MANIFEST_PATH} -n landing-page-staging
                    """
                }
            }
        }
        
        stage('Deploy Notification') {
            steps {
                script {
                    def deploymentStatus = currentBuild.result ?: 'SUCCESS'
                    echo "Deployment ${deploymentStatus}: ${env.APP_NAME}:${env.IMAGE_TAG}"
                    
                    // ArgoCD will automatically sync the changes
                    echo "ArgoCD will detect the manifest changes and deploy automatically"
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
            // Add notification logic here (Slack, email, etc.)
        }
    }
}
