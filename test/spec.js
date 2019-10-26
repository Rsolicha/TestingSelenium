describe('Login', function() {
    beforeAll(async function() {
        await browser.waitForAngularEnabled(false);
        await browser.get("https://qa.timtravel.app/");
        //Add username
        element(by.id('username')).sendKeys('ignacio');
        //Add password
        element(by.id('password')).sendKeys('Igno_$19');
        //Button login
        element(by.xpath(`//*[@id="content"]/div/div[2]/div/div/div/div/ui-view/login-component/div/div[2]/div[1]/form/div[3]/button`)).click().then(function() {
            browser.sleep(2000);
        });

    });

    beforeEach(async function() {
        await browser.get("https://qa.timtravel.app/#!/bookings/new");
    });

    afterAll(async function() {
        browser.restart();
    });

    afterEach(function() {
        //Button for select time transport
        element(by.xpath(`//*[@id="scroller-table"]/table[2]/tbody/tr/td/button`)).click().then(function() {
            browser.sleep(1500);
        });
        //Select for decide a pick up
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[1]/div[6]/div/div/div[1]/a`)).click().then(function() {
            browser.sleep(2000);
        });
        //Select GH pick up
        element(by.xpath(`//*[@id="ui-select-choices-row-10-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select for decide a drop off
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[1]/div[7]/div/div/div/a`)).click().then(function() {
            browser.sleep(2000);
        });
        //Select GH pick up
        element(by.xpath(`//*[@id="ui-select-choices-row-11-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Button calendar to November
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[2]/div/availability-calendar/div/div[1]/div[1]/button[4]`)).click().then(function() {
            browser.sleep(1500);
        });
        //Button calendar to December
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[2]/div/availability-calendar/div/div[1]/div[1]/button[4]`)).click().then(function() {
            browser.sleep(1500);
        });
        //Button calendar to January
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[2]/div/availability-calendar/div/div[1]/div[1]/button[4]`)).click().then(function() {
            browser.sleep(1500);
        });
        //Select date specify
        element(by.xpath(`/html/body/div[3]/div[2]/div/div/booking-item-detail/form/div[1]/div/div/div[2]/div/availability-calendar/form/div/div/table/tbody/tr[2]/td[1]`)).click().then(function() {
            browser.sleep(3000);
        });
        //Button for save booking
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[3]/div/div[1]/form/div[2]/div[2]/div/div[2]/div[2]/button[1]`)).click().then(function() {
            browser.sleep(1500);
        });
        //Button for add guests
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[3]/ul/li[2]/a`)).click().then(function() {
            browser.sleep(1500);
        });
        //Button for create new guest
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[3]/div/div[2]/booking-guest-list/button`)).click().then(function() {
            browser.sleep(1500);
        });
        //Add name
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[1]/div[1]/div/input')).sendKeys('Royland');
        //Add lastname
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[1]/div[2]/div/input')).sendKeys('Solis');
        //Select gender
        element(by.xpath(`/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[2]/div[1]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select gender position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-18-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select type
        element(by.xpath(`/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[2]/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select type position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-19-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Add phone
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[3]/div[1]/div/input')).sendKeys('88026523');
        //Add email
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[3]/div[2]/div/input')).sendKeys('rsolicha@gmail.com');
        //Add height
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[4]/div[1]/div/input')).sendKeys('1.60');
        //Select height type
        element(by.xpath(`/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[4]/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select height type position 0 "Feet"
        element(by.xpath(`//*[@id="ui-select-choices-row-20-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Add weight
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[4]/div[3]/div/input')).sendKeys('50');
        //Select weight type
        element(by.xpath(`/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[4]/div[4]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select weight type position 1 "KM"
        element(by.xpath(`//*[@id="ui-select-choices-row-21-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Add date
        element(by.xpath('/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[1]/div/div[5]/div/div/input')).sendKeys('Nov 18, 1998');
        //Save Guests
        element(by.xpath(`/html/body/div[4]/div[2]/div/div[2]/booking-guest-detail/form/div[2]/span/span/button`)).click().then(function() {
            browser.sleep(2000);
        });
        //Return for end
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[1]/div[2]/span[3]`)).click().then(function() {
            browser.sleep(1500);
        });
        browser.refresh();
    });

    it('Nombre de usuario requerido', async function() {

        browser.sleep(1000);
        //Button booking
        element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
            browser.sleep(1500);
        });
        //Write client name 
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
            browser.sleep(2000);
        });
        //Select user
        element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
            browser.sleep(1500);
        });
        //Select with options of price list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select price list position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select with options of currency
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Select currency list position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Document type select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Document type position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Booked via select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Booked via position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-1-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Sales source select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-2-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-3-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Sale condition select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sale condition position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Payment method select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Payment method position 0
        element(by.xpath(`//*[@id="ui-select-choices-row-7-0"]`)).click().then(function() {
            browser.sleep(1000);
        });

        //Button add booking
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button`)).click().then(function() {
            browser.sleep(1500);
        })

        //Button add transportation
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/span/button[2]`)).click().then(function() {
            browser.sleep(1500);
        })
    })


})