repo=$1
commit=$2
docker compose up -d
./build.sh $repo $commit
sleep 10
./run_tests.sh $repo $commit
exitcode=$?
echo "TEST_EXIT_CODE:$exitcode" >> "testresults_$commit"
exit 0
