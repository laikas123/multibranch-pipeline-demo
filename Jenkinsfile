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
                echo "The current PR number is ${env.CHANGE_ID}"
                echo "The current commit hash is ${env.GIT_COMMIT}"
                echo "The current branch is ${env.GIT_BRANCH}"
        
                sh """
                echo "Cleaned Up Workspace For Project"
                echo "${env.CHANGE_ID} blahhhhhh"
                ls
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
