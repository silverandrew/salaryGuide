/**
 * Created by eli on 4/14/15.
 */
angular.module("salaryGuide")
.service('adSVC',function(){
        var device = {
            desktop: true,
            phone: false
        };
        this.getDevice = function(){
            // Sets flags for which device is being used to inject the proper ad in the template
            var deviceWidth = window.innerWidth;

            if(deviceWidth > 500){
                device.desktop = true;
                device.phone = false;
            }
            if(deviceWidth < 500){
                device.desktop = false;
                device.phone = true;
            }
            return device
        }
    });