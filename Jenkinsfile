pipeline {
    agent any

    tools {nodejs "node"}
    
    stages {
        stage('Pull code from repository'){
            steps {
                git branch: 'main', url: 'https://github.com/yasirw212/speed-typing.git'
                sh ('npm install')
            }
        }

        stage('Run Application'){
            steps {
                sh ('npm run dev')
            }
        }
    }
}
