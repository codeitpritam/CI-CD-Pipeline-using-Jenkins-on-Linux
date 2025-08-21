
pipeline {
 
    agent any

 
    stages {
 

    
        stage('Build') {
            steps {
                echo 'Build step: Nothing to compile for a static web app.'
            }
        }


        stage('Test') {
            steps {
                echo 'Test step: No automated tests configured for this project.'
            }
        }

    
        stage('Deploy') {
            steps {
                echo 'Deploying the Todo List app to the Nginx web server on Fedora...'
                
                sh 'sudo cp index.html style.css script.js /usr/share/nginx/html/'
                echo 'Deployment complete!'
            }
        }
    }

    
    post {
        success {
            echo 'Pipeline finished successfully. The Todo List is live.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
