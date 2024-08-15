pipeline {
    agent any

    tools {nodejs "node"}
    
    stages {
        stage('Pull code from repository'){
            steps {
                git ('https://github.com/yasirw212/speed-typing.git')
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
