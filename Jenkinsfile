pipeline {

    agent {
        node {
            label 'myaws'
        }
    }

    options {
        buildDiscarder logRotator( 
                    daysToKeepStr: '16', 
                    numToKeepStr: '10'
            )
    }
    
    def PULL_REQUEST = env.CHANGE_ID

    stages {
        
        stage('Cleanup Workspace') {
            steps {
                sh """
                echo "Cleaned Up Workspace For Project"
                echo "pull request id = $PULL_REQUEST"
                """
            }
        }

       

        stage('Run Selenium Tests') {
          
            steps {
                sh """
                echo "Building Artifact"
                """

                
            }
        }

    }   
}
