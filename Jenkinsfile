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
    
    

    stages {
        
        stage('Cleanup Workspace') {
            steps {
                echo "The current commit is ${env.GIT_COMMIT}"
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
