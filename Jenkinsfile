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

        disableConcurrentBuilds(abortPrevious: true)
  
    }
    
    

    stages {
        
        stage('Cleanup Workspace') {
            steps {
                echo "The current PR number is ${env.CHANGE_ID}"
                echo "The current commit hash is ${env.GIT_COMMIT}"
                echo "The current branch is ${env.GIT_BRANCH}"
        
                sh """
                echo "Cleaned Up Workspace For Project"
                ls
                """
            }
        }

       

        stage('Run Selenium Tests') {
          
            steps {
                
                
                dir('/home/ubuntu/test_root') {
                    sh 'docker compose up -d'
                    sleep 10
                }
                
                
                sh """
                echo "Running Selenium Tests"
                sudo npm install -g mocha
                sudo npm install -g mocha-junit-reporter
                sudo npm install selenium-webdriver
                mocha test
                """
                
                

                
            }
        }

    }   
}
