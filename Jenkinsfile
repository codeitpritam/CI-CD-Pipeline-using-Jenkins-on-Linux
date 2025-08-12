// This is a declarative pipeline, the modern way to define a Jenkins job.
pipeline {
    // 'agent any' means this pipeline can run on any available Jenkins machine.
    agent any

    // The 'stages' block contains the sequence of steps for our CI/CD process.
    stages {
        // NOTE: We have removed the 'Checkout Code' stage.
        // The main Jenkins job configuration already checks out the code for us,
        // so we don't need to do it again here.

        // STAGE 1: A placeholder for building.
        stage('Build') {
            steps {
                echo 'Build step: Nothing to compile for a static web app.'
            }
        }

        // STAGE 2: A placeholder for testing.
        stage('Test') {
            steps {
                echo 'Test step: No automated tests configured for this project.'
            }
        }

        // STAGE 3: Deploy the application!
        stage('Deploy') {
            steps {
                echo 'Deploying the Todo List app to the Nginx web server on Fedora...'
                // This command copies the files from the workspace into the web server directory.
                sh 'sudo cp index.html style.css script.js /usr/share/nginx/html/'
                echo 'Deployment complete!'
            }
        }
    }

    // The 'post' section runs after all stages are complete.
    post {
        success {
            echo 'Pipeline finished successfully. The Todo List is live.'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
