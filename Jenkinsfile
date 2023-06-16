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
                echo "The previous commit hash is ${env.GIT_PREVIOUS_COMMIT}"
                echo "The current branch is ${env.GIT_BRANCH}"
                
                sh """
                echo "Cleaned Up Workspace For Project"
                ls
                git diff --stat ${env.GIT_PREVIOUS_COMMIT} ${env.GIT_COMMIT}
                """
            }
        }

       

        stage('Run Selenium Tests') {
          
            steps {
                
                
                // dir('/home/ubuntu/test_root') {
                //     sh 'docker compose up -d'
                //     sleep 10
                // }

                // dir('/home/ubuntu/test_root') {
                //     sh "./start.sh multibranch-pipeline-demo 5eefc59a558befae47a6329df8f328117e196526"
                    
                // }

                sh "echo howdy"
                
                // sh """
                // echo howdy
                // echo "Running Selenium Tests"
                // sudo npm install -g mocha
                // sudo npm install -g mocha-junit-reporter
                // sudo npm install selenium-webdriver
                // mocha test/*
                // """
                
                

                
            }
        }

    }   
}
