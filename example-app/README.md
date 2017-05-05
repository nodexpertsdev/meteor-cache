## Demo for meteor-cache

### To run the app

`git clone https://github.com/nodexpertsdev/meteor-cache`

`cd example-app`

Now run:

`meteor run` or `meteor`

Your app will be running on: `http://localhost:3000/`

The data you'll be seeing on page is from cache, now try to update the cahe by clicking `Update` button.

To see the real action of server cache:
* try to run app in two tabs
* refresh all the tabs
* now click update button on only one tab 
* refresh other tabs
* you'll see the same updated data on all the tabs
* that's the real magic of server side caching

**It is highly recommended that don't store large amount of data on server cache.**