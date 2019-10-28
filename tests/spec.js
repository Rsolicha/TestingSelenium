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

    afterEach(function() {
        browser.refresh();
    });

    afterAll(function() {
        browser.restart();
    });
    // it('P1 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own0SC0PM0', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Button add booking
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });

    // it('P2 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own0SC0PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Button add booking
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P3 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own1SC1PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P4 CrearBookingSinNombrePL0Cur0DT0BV0SS1Own1SC1PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P5 CrearBookingSinNombrePL0Cur0DT0BV1SS1Own1SC1PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P6 CrearBookingSinNombrePL0Cur1DT0BV1SS1Own1SC1PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P7 CrearBookingSinNombrePL1Cur1DT0BV1SS1Own1SC1PM1', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);

    // });
    // it('P8 CrearBookingSinNombrePL1Cur1DT0BV1SS1Own1SC1PM2', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 2
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-2"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    // });
    // it('P9 CrearBookingSinNombrePL0Cur1DT0BV1SS1Own1SC1PM2', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 2
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    // });
    // it('P10 CrearBookingSinNombrePL0Cur1DT0BV1SS1Own1SC1PM2', async function() {
    //     browser.sleep(1000);
    //     //Button booking
    //     element(by.xpath(`//*[@id="nav"]/li[1]/span`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Write client name 
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[1]/div/div/div/input`)).sendKeys('Da').then(function() {
    //         browser.sleep(2000);
    //     });
    //     //Select user
    //     element(by.xpath(`//*[@class="dropdown-menu ng-isolate-scope"]/li[1]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Select with options of price list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[1]/div[2]/div[2]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select price list position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-4-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select with options of currency
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[2]/div[2]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Select currency list position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Document type select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[2]/div[3]/div/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Document type position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-0-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[1]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Booked via position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sales source position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Owner position 1
    //     element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[4]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Sale condition position 0
    //     element(by.xpath(`//*[@id="ui-select-choices-row-6-0"]`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method select list
    //     element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[5]/div/div/div[2]/div/div/a`)).click().then(function() {
    //         browser.sleep(1000);
    //     });
    //     //Payment method position 2
    //     element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
    //         browser.sleep(1500);
    //     });
    //     //Verify Button add booking is enable
    //     expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    // });
    it('P11 CrearBookingSinNombrePL0Cur0DT0BV1SS1Own1SC1PM2', async function() {
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
        //Booked via position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P12 CrearBookingSinNombrePL0Cur0DT0BV0SS1Own1SC1PM2', async function() {
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
        //Sales source position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P13 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own1SC1PM2', async function() {
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
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P14 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own0SC1PM2', async function() {
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
        //Payment method position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P15 CrearBookingSinNombrePL2Cur0DT0BV0SS0Own0SC0PM2', async function() {
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
        //Select price list position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-4-2"]`)).click().then(function() {
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
        //Payment method position 2
        element(by.xpath(`//*[@id="ui-select-choices-row-7-2"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P16 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own0SC0PM3', async function() {
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
        //Payment method position 3
        element(by.xpath(`//*[@id="ui-select-choices-row-7-3"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P17 CrearBookingSinNombrePL0Cur0DT0BV0SS0Own1SC0PM3', async function() {
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
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 3
        element(by.xpath(`//*[@id="ui-select-choices-row-7-3"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P18 CrearBookingSinNombrePL0Cur0DT0BV0SS1Own1SC0PM3', async function() {
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
        //Sales source position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 3
        element(by.xpath(`//*[@id="ui-select-choices-row-7-3"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P19 CrearBookingSinNombrePL0Cur0DT0BV1SS1Own1SC0PM3', async function() {
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
        //Booked via position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 3
        element(by.xpath(`//*[@id="ui-select-choices-row-7-3"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
    it('P20 CrearBookingSinNombrePL0Cur1DT0BV1SS1Own1SC0PM3', async function() {
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
        //Select currency list position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-5-1"]`)).click().then(function() {
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
        //Booked via position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-1-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[2]/div/div[2]/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Sales source position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-2-1"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner select list
        element(by.xpath(`//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[1]/div[3]/div[3]/div/div/div/a`)).click().then(function() {
            browser.sleep(1000);
        });
        //Owner position 1
        element(by.xpath(`//*[@id="ui-select-choices-row-3-1"]`)).click().then(function() {
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
        //Payment method position 3
        element(by.xpath(`//*[@id="ui-select-choices-row-7-3"]`)).click().then(function() {
            browser.sleep(1000);
        });
        //Verify Button add booking is enable
        expect(element(by.xpath('//*[@id="content"]/div/div[3]/div/div/div/div/ui-view/booking-detail-component/div/booking-detail/div[2]/div/div/form/div[2]/button')).isEnabled()).toBe(true);
    });
})