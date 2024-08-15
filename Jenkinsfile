pipeline {
    agent any
    
    stages {
        stage('Build'){
            steps {
                sh ('docker build -t webapp:latest .')
            }
        }

        stage('Deploy') {
            steps {
                sh ('docker run -d -p 8082:8082 webapp')
            }
        )
    }
}
