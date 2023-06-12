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
                echo "The current pr number is ${env.CHANGE_ID}"
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
