pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mohdyusufali/portfolio-dockerized.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
            }
        }
        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name portfolio portfolio-app'
            }
        }
    }
}
