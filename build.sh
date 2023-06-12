#create new directory name based
#on repo and commit
repo=$1
commit=$2
new_dir_name="$repo.$commit"

#remove in case exists
rm -rf $new_dir_name

#create dir and cd
mkdir $new_dir_name
cd $new_dir_name

#perform a sparse checkout to only get
#the selenium tests
git init
git config core.sparseCheckout true
git remote add -f origin https://laikas123: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@github.com/laikas123/remote-trigger.git
echo "test/*" > .git/info/sparse-checkout
git checkout $commit
mkdir "/home/ubuntu/test_root/test/$commit"
#cd test
#cp -a "." "/home/ubuntu/mocha_tests_2/test/$commit/"
mv -v test/* "/home/ubuntu/test_root/test/$commit/"
cd ..
rm -rf $new_dir_name
