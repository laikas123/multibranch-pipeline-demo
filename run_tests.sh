repo=$1
commit=$2
mocha "test/$commit/" > "testresults_$commit"
exit_code=$(echo $?)
docker compose stop
./cleanup.sh $commit
exit $exit_code
