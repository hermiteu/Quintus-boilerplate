#bin/sh
#TODO move this to grunt and change locaion to components/
#TODO A Quintus Bower module is preferable
rm -rf .quintus
rm -rf docs/quintus
rm -rf source/javascripts/libs/quintus
git clone git://github.com/cykod/Quintus.git .quintus
mv .quintus/lib source/javascripts/libs/quintus
mv .quintus/vendor source/javascripts/libs/quintus/vendor
rm -rf source/javascripts/libs/quintus/vendor/vendor
mv .quintus/docs docs/quintus
rm -rf .quintus