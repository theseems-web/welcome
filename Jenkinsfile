pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                yarn 'install'
                yarn 'build'
                archiveArtifacts artifacts: '**/build/**', fingerprint: true
            }
        }
    }
}