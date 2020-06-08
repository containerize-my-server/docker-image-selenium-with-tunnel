# docker-image-selenium-with-tunnel

This image contains a proof of concept for how to host your own selenium-hub for use in CI/CD pipelines.
It builds upon the image [elgalu/selenium] and includes a reverse-tunnel-server that allows access from 
the selenium-container to the build-container. 

**The image is not ready for production. There are no real automated tests and there is no support.**

## Readme of `elgalu/selenium`:

> This docker image has more than 35 Million downloads and is now looking for sponsors to ensure it's properly maintained:
>  
> Please become a Sponsor:
>  
> https://github.com/sponsors/elgalu
> 
> Documentation can be found at https://github.com/elgalu/docker-selenium/blob/master/README.md 

# Analytics

`elgalu/docker-selenium` is sending anonymous analytics to Google: Have a look 
here https://github.com/elgalu/docker-selenium/blob/master/Analytics.md for more details.

You can disable analytics by specifying

```
SEND_ANONYMOUS_USAGE_INFO=false
```

in the environment

## The reverse tunnel

Ths reverse tunnel is implemented using [chisel](https://github.com/jpillora/chisel). For usage-examples,
have a look at the "test"-folder.
