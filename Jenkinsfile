// This is a declarative pipeline, the modern way to define a Jenkins job.
pipeline {
    // 'agent any' means this pipeline can run on any available Jenkins machine.
    agent any

    // The 'stages' block contains the sequence of steps for our CI/CD process.
    stages {
        // STAGE 1: Get the code
        stage('Checkout Code') {
            steps {
                // This command tells Jenkins to pull the latest code from your GitHub repository.
                // Make sure to replace YOUR_USERNAME with your actual GitHub username.
                git url: 'https://github.com/codeitpritam/jenkins-todo-app.git', branch: 'main'
                echo 'Code checked out successfully from GitHub.'
            }
        }

        // STAGE 2: A placeholder for building.
        stage('Build') {
            steps {
                echo 'Build step: Nothing to compile for a static web app.'
            }
        }

        // STAGE 3: A placeholder for testing.
        stage('Test') {
            steps {
                echo 'Test step: No automated tests configured for this project.'
            }
        }

        // STAGE 4: Deploy the application!
        stage('Deploy') {
            steps {
                echo 'Deploying the Todo List app to the Nginx web server on Fedora...'
                // This is the updated command for Fedora's Nginx directory structure.
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
