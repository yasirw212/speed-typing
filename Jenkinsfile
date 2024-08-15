pipeline {
    agent any
    
    stages {
        stage('Build'){
            steps {
                git branch: 'main', url: 'https://github.com/yasirw212/speed-typing.git'
                sh('whoami')
                sh('sudo usermod -aG docker $USER')
                sh ('sudo docker build -t webapp:latest .')
            }
        }

        stage('Deploy') {
            steps {
                sh ('sudo docker run -d -p 8082:8082 webapp')
            }
        }
    }
}
