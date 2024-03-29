﻿var MYApp={
		appOptions:{},
		domain:"192.168.44.56:8080/MServer/"
};

    MYApp.serverUrl="http://" + MYApp.domain;
    MYApp.contactsInfoURL=MYApp.serverUrl + "searchContactsInfoServlet.search";
    
MYApp.app=new kendo.mobile.Application($(document.body),MYApp.appOptions);

    var contacts=[{"cempguid":"424773512541615873","deptId":"19054","deptName":"软件部","email":"bianfang@test.com","employeeId":"447","fixPhone":"88896630","mobliePhone":"7657657657575","name":"卞芳"},
        {"cempguid":"","deptId":"20050","deptName":"","email":"admin@test.com","employeeId":"140","fixPhone":"","mobliePhone":"","name":"超级管理员"},
        {"cempguid":"736156206876552806","deptId":"19054","deptName":"软件部","email":"","employeeId":"473","fixPhone":"010-454545","mobliePhone":"","name":"陈小磊"},
        {"cempguid":"302115446078700231","deptId":"19052","deptName":"安全中心","email":"chenyibo@test.com","employeeId":"585","fixPhone":"","mobliePhone":"2222","name":"陈怡博"},
        {"cempguid":"424773512541615893","deptId":"19050","deptName":"技术研究院总体部","email":"","employeeId":"444","fixPhone":"232323","mobliePhone":"111","name":"程智锋"},
        {"cempguid":"424773512541615905","deptId":"19055","deptName":"技术研究院综合办公","email":"","employeeId":"464","fixPhone":"","mobliePhone":"454545","name":"邓琳"},
        {"cempguid":"424773512541615751","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"414","fixPhone":"010-2323","mobliePhone":"655656","name":"丁瑶"},
        {"cempguid":"736156206876552850","deptId":"19054","deptName":"技术研究院应用软件部","email":"duyuekun@test.com","employeeId":"472","fixPhone":"010-565656","mobliePhone":"67676578","name":"杜悦琨"},
        {"cempguid":"","deptId":"21050","deptName":"技术研究院外协","email":"","employeeId":"543","fixPhone":"5464565","mobliePhone":"7879789","name":"段秋英"},
        {"cempguid":"424773512541615881","deptId":"19053","deptName":"技术研究院基础技术部","email":"","employeeId":"416","fixPhone":"010-6776878","mobliePhone":"234345345","name":"范宜强"},
        {"cempguid":"","deptId":"21050","deptName":"技术研究院外协","email":"","employeeId":"546","fixPhone":"","mobliePhone":"","name":"范增瑞"},
        {"cempguid":"","deptId":"21050","deptName":"技术研究院外协","email":"","employeeId":"545","fixPhone":"","mobliePhone":"768768768","name":"方海杰"},
        {"cempguid":"424773512541615823","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"480","fixPhone":"010-768768","mobliePhone":"576567575757","name":"耿方"},
        {"cempguid":"","deptId":"21050","deptName":"技术研究院外协","email":"","employeeId":"541","fixPhone":"88896631","mobliePhone":"435345435","name":"谷亚伟"},
        {"cempguid":"424773512541615743","deptId":"19050","deptName":"技术研究院总体部","email":"","employeeId":"433","fixPhone":"010-88896713","mobliePhone":"687576567576","name":"郭向国"},
        {"cempguid":"424773512541615825","deptId":"19054","deptName":"技术研究院应用软件部","email":"haoquandong@test.com","employeeId":"469","fixPhone":"1","mobliePhone":"687687686786876","name":"郝全东"},
        {"cempguid":"424773512541615745","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"417","fixPhone":"","mobliePhone":"","name":"何丽"},
        {"cempguid":"424773512541615827","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"455","fixPhone":"8889667657735","mobliePhone":"43545435","name":"何巍"},
        {"cempguid":"223232811310301444","deptId":"19053","deptName":"技术研究院基础技术部","email":"londeehu@gmail.com","employeeId":"604","fixPhone":"7098","mobliePhone":"45465466","name":"胡懋地"},
        {"cempguid":"424773512541615789","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"406","fixPhone":"","mobliePhone":"","name":"华刚"},
        {"cempguid":"201691825669971437","deptId":"19053","deptName":"技术研究院基础技术部","email":"","employeeId":"438","fixPhone":"010-676776","mobliePhone":"","name":"黄允春"},
        {"cempguid":"104793675227814553","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"700","fixPhone":"","mobliePhone":"","name":"贾文和"},
        {"cempguid":"424773512541615887","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"454","fixPhone":"345435435","mobliePhone":"567657657","name":"靳凯"},
        {"cempguid":"424773512541615805","deptId":"19050","deptName":"技术研究院总体部","email":"","employeeId":"423","fixPhone":"","mobliePhone":"","name":"李其均"},
        {"cempguid":"424773512541615769","deptId":"19055","deptName":"技术研究院综合办公","email":"liruixiang@test.com","employeeId":"460","fixPhone":"","mobliePhone":"","name":"李瑞祥"},
        {"cempguid":"224006755985497050","deptId":"19054","deptName":"技术研究院应用软件部","email":"lixianying@test.com","employeeId":"601","fixPhone":"88897823","mobliePhone":"6t8767687","name":"李宪英"},
        {"cempguid":"301964883529254119","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"660","fixPhone":"","mobliePhone":"","name":"梁宵"},
        {"cempguid":"425545412932179246","deptId":"19054","deptName":"技术研究院应用软件部","email":"liangrui@test.com","employeeId":"476","fixPhone":"010-88897507","mobliePhone":"6767676","name":"梁睿"},
        {"cempguid":"302136099793490834","deptId":"19053","deptName":"技术研究院基础技术部","email":"linjianhua@test.com","employeeId":"586","fixPhone":"010-88897046","mobliePhone":"354","name":"林建华"},
        {"cempguid":"424773512541615811","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"403","fixPhone":"6728","mobliePhone":"3545554","name":"林凉"},
        {"cempguid":"424773512541615837","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"448","fixPhone":"010-8897510","mobliePhone":"34555","name":"林文辉"},
        {"cempguid":"424773512541615385","deptId":"2","deptName":"技术研究院管理层","email":"","employeeId":"407","fixPhone":"010-88896138","mobliePhone":"13501242711","name":"刘海法"},
        {"cempguid":"181480430967110461","deptId":"19053","deptName":"技术研究院基础技术部","email":"","employeeId":"428","fixPhone":"010-88897050","mobliePhone":"3554545","name":"刘敏"},
        {"cempguid":"302093676912260419","deptId":"19053","deptName":"技术研究院基础技术部","email":"liupei@test.com","employeeId":"583","fixPhone":"01088897840","mobliePhone":"34555","name":"刘培"},
        {"cempguid":"424773512541615883","deptId":"19053","deptName":"技术研究院基础技术部","email":"liuyanmei@test.com","employeeId":"419","fixPhone":"88896543","mobliePhone":"3553455","name":"刘岩梅"},
        {"cempguid":"424773512541615761","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"446","fixPhone":"010-88896725","mobliePhone":"3453455","name":"刘振"},
        {"cempguid":"224064870155924113","deptId":"19054","deptName":"技术研究院应用软件部","email":"liuyi13@test.com","employeeId":"600","fixPhone":"88897833","mobliePhone":"345353545","name":"刘奕"},
        {"cempguid":"424773512541615793","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"412","fixPhone":"010-88896707","mobliePhone":"3453455","name":"罗世新"},
        {"cempguid":"","deptId":"21050","deptName":"技术研究院外协","email":"","employeeId":"544","fixPhone":"","mobliePhone":"18032163637","name":"罗亚东"},
        {"cempguid":"424773512541615841","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"436","fixPhone":"88896751","mobliePhone":"34534535","name":"马强"},
        {"cempguid":"424773512541615807","deptId":"19050","deptName":"技术研究院总体部","email":"","employeeId":"402","fixPhone":"","mobliePhone":"","name":"孟小虎"},
        {"cempguid":"424773512541615843","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"410","fixPhone":"010-88896730","mobliePhone":"4354545545","name":"宁红宙"},
        {"cempguid":"424773512541615845","deptId":"19050","deptName":"技术研究院总体部","email":"","employeeId":"431","fixPhone":"010-88896743","mobliePhone":"3543545","name":"邵波"},
        {"cempguid":"424773512541615813","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"418","fixPhone":"010-88896711","mobliePhone":"56576","name":"舒南飞"},
        {"cempguid":"424773512541615777","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"409","fixPhone":"010-88896739","mobliePhone":"65765","name":"苏斌"},
        {"cempguid":"302093676912260472","deptId":"19054","deptName":"技术研究院应用软件部","email":"suijingtao@163.com","employeeId":"584","fixPhone":"","mobliePhone":"567756","name":"隋静涛"},
        {"cempguid":"252541850770683379","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"425","fixPhone":"010-88897504","mobliePhone":"67557656","name":"孙科武"},
        {"cempguid":"424773512541615879","deptId":"2","deptName":"技术研究院管理层","email":"sunbaoqing@test.com","employeeId":"420","fixPhone":"88896501","mobliePhone":"65757567","name":"孙葆青"},
        {"cempguid":"424773512541615781","deptId":"19055","deptName":"技术研究院综合办公","email":"tanyanyun@test.com","employeeId":"415","fixPhone":"010-88896722","mobliePhone":"56767567","name":"谈艳云"},
        {"cempguid":"424773512541615847","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"401","fixPhone":"010-88896754","mobliePhone":"1358165767797700","name":"唐凌"},
        {"cempguid":"424773512541615755","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"405","fixPhone":"","mobliePhone":"","name":"田心"},
        {"cempguid":"424773512541615803","deptId":"19054","deptName":"技术研究院应用软件部","email":"wangfang@test.com","employeeId":"411","fixPhone":"010-888896756","mobliePhone":"78768788","name":"王芳"},
        {"cempguid":"564040801772386634","deptId":"19052","deptName":"技术研究院信息安全中心","email":"","employeeId":"449","fixPhone":"","mobliePhone":"","name":"王国文"},
        {"cempguid":"352780328783269466","deptId":"19053","deptName":"技术研究院基础技术部","email":"","employeeId":"560","fixPhone":"","mobliePhone":"","name":"王宏伟"},
        {"cempguid":"424773512541615763","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"404","fixPhone":"010-ere","mobliePhone":"5656","name":"王杰斌"},
        {"cempguid":"424773512541615771","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"430","fixPhone":"010-retr4546546","mobliePhone":"8796786","name":"王启刚"},
        {"cempguid":"327455654336136573","deptId":"19053","deptName":"技术研究院基础技术部","email":"","employeeId":"640","fixPhone":"","mobliePhone":"","name":"王千喜"},
        {"cempguid":"424773512541615851","deptId":"19054","deptName":"技术研究院应用软件部","email":"","employeeId":"468","fixPhone":"88897432","mobliePhone":"4546546","name":"王申"}];
        
        
        
    var viewModel = kendo.observable({
        name: "",
        phone: "",
        tel: "",
        email: "",
        letter:""
    }); 
      
    var _showDetail = function(e){
        var contactId = e.view.params.contactId;        
        var contactInfo;
        for (var i = 0; i < contacts.length; i++) {
            if (contactId == contacts[i].employeeId) {
                contactInfo = contacts[i];
                break;
            }
        }
        //alert("contactInfo " + contactInfo);
        if (contactInfo != undefined) {
            $("#contactName").text(contactInfo.name);
            $("#contactPhone").text(contactInfo.mobliePhone);
            $("#contactTel").text(contactInfo.fixPhone);
            $("#contactEmail").text(contactInfo.email);
            
            viewModel.set("name", contactInfo.name);
            viewModel.set("phone", contactInfo.mobliePhone);
            viewModel.set("tel", contactInfo.fixPhone);
            viewModel.set("email", contactInfo.email);
            viewModel.set("letter", contactInfo.deptName);
        }/*else {
            viewModel.set("name", "");
            viewModel.set("phone", "");
            viewModel.set("tel", "");
            viewModel.set("email", "");
            viewModel.set("letter", "");
        }
        kendo.bind($("#contacts-list"), viewModel);*/
    },
    
    _editMessage = function(e){
        $("#readerID").text($("#contactName").text());
        $("#messageContent").html();
        $("#messageContent")[0].focus();
    },
    
    sendMsg = function(e){
     	var msg = $("#messageContent").val();

     	if (msg == null || msg=="") {
            navigator.notification.alert("请填写短信内容！", function(){
            }, "错误", "确定");

        } else if ($("#contactPhone").text()==""){
            navigator.notification.alert("发送号码为空！", function(){
            }, "错误", "确定");
        }
        else
            window.plugin.sendSms.send(_sendSuccess,_sendFail,[$("#contactPhone").text()],msg);
    },

    _sendSuccess = function(e){
    	navigator.notification.alert("发送成功！", function(){
          kendoApp.navigate("#contact-detail-view");
                                               }, "提示", "确定");        
    },

    _sendFail = function(e){
    	    	navigator.notification.alert("发送失败！", function(){
                                               }, "错误", "确定");  
    },   
    
    call=function(e){
        var callnumber=$("#contactPhone").text();
        if(callnumber && callnumber!="")
    	    window.plugin.dialer.call(callnumber);
        else
            navigator.notification.alert("电话号码为空，无法拨打！", function(){
            }, "错误", "确定");
    },

    callTel=function(e){
        var callnumber=$("#contactTel").text();
        if(callnumber && callnumber!="")
            window.plugin.dialer.call(callnumber);
        else
            navigator.notification.alert("电话号码为空，无法拨打！", function(){
            }, "错误", "确定");
    },

    sendsms=function(e){
       var callback=function(){
       };

       window.plugin.emailComposer.showEmailComposerWithCallback(callback," ","你好:",[$("#contactEmail").text()],[],[],true,null);
    };
   
    //-----------------------add by jinkai-------------------------------
    //need add plugin: org.apache.cordova.dialogs   org.apache.cordova.contacts  com.aisino.email
    var contactsOBJ={
        chooseItemsID:[],
        saveDeviceItems:[],
        serverURL:MYApp.contactsInfoURL
        //serverURL:"http://192.168.44.7:8080/MServer/searchContactsInfoServlet.search"
    };

    var ContactCB={
        contactNumber:0,
        successCount:0,
        errorCount:0,
        chooseAll:false,
        currentIdx:0
    };

    //创建联系人对象
    var createContact = function (name, phone, tel, email, letter) {
       var contact = navigator.contacts.create();
       contact.displayName = name;

       var contactname = new ContactName();
       contactname.familyName = name;
       contact.name = contactname;

       contact.note="研究院信息系统导入";
       //console.log(contact.displayName);
       //contact.nickname = name;

       if(tel!="" || phone!=""){
           var phoneNumbers = [];
           if(tel!="" && phone!="")  {
               phoneNumbers[0] = new ContactField('work', tel, false);
               phoneNumbers[1] = new ContactField('mobile', phone, true); // preferred number
           }
           else if(tel!="" && phone==""){
               phoneNumbers[0] = new ContactField('work', tel, false);
           }
           else{
               phoneNumbers[0] = new ContactField('mobile', phone, true); // preferred number
           }
           //phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
           contact.phoneNumbers = phoneNumbers;
       }

       if(email!=""){
           var emails = [];
           emails[0] = new ContactField('work', email, true);
           contact.emails = emails;
       }

       if(letter!=""){
           var categories = [];
           categories[0] = new ContactField('deptName', letter, true);
           contact.categories = categories;
       }

       return contact;
    };

    function dataClear(){
        contactsOBJ.chooseItemsID=[];
        contactsOBJ.saveDeviceItems=[];

        ContactCB.contactNumber=0;
        ContactCB.successCount=0;
        ContactCB.errorCount=0;
        ContactCB.chooseAll=false;
        ContactCB.currentIdx=0;
    }

    function saveDataLocal(data){
       var saveData=JSON.stringify(data);
       localStorage.setItem("aisinoContacts",saveData);
    }
       
    function GetDataLocal(){
       var getData=localStorage.getItem("aisinoContacts");
       return JSON.parse(getData);
    }

       
    var showEdit=function(){
        var existListView = $("#contacts-list-edit").data().kendoMobileListView;
        if (existListView) {
            existListView.destroy();
            MYApp.app.scroller().reset();
        }

       $("#contacts-list-edit").kendoMobileListView({
                dataSource: kendo.data.DataSource.create({data: contacts, group: "deptName"}),
                template: $("#contacts-edit-template").text(),
                fixedHeaders: true
        });
    };

    //按键刷新
    var  refresh=function(){
        getDataFromServer(contactsOBJ.serverURL,null);       
    };
    //滚动刷新
    var  pullrefresh=function(scroller){
        getDataFromServer(contactsOBJ.serverURL,scroller);
    };
    //全选所有联系人
    var chooseAll=function(){
            var allItem=$("#contacts-list-edit").find("input[type=checkbox]");
            for(var i=0;i<allItem.length;i++)
            {
                allItem.eq(i).attr("checked",'true');
            }
            ContactCB.chooseAll=true;
    };

    function onSuccess(contact) {
        ContactCB.successCount++;
        ContactCB.currentIdx++;

       var percent=parseInt(ContactCB.currentIdx*100/ContactCB.contactNumber)+"%";
       MYApp.app.changeLoadingMessage(percent);
       //console.log("percent:"+percent);
//       console.log($(".km-loader").html());
       
       //setTimeout(function(){
            if (ContactCB.contactNumber > ContactCB.successCount + ContactCB.errorCount) {
                gotoLoop(ContactCB.currentIdx);
            }
            else{
                checkResult();
            }
        //},150);
    };

    function onError(contactError) {
        ContactCB.errorCount++;
        ContactCB.currentIdx++;
        //console.log("errorCount:"+ContactCB.errorCount);

        if (ContactCB.contactNumber > ContactCB.successCount + ContactCB.errorCount) {
            gotoLoop(ContactCB.currentIdx);
        }
        else{
            checkResult();
        }
    };

    function checkResult(){
       if (ContactCB.contactNumber == ContactCB.successCount + ContactCB.errorCount) {
       // You know that all contacts have been saved
           navigator.notification.alert("成功："+ContactCB.successCount+"个\n"+"失败："+ContactCB.errorCount+"个", function(){
               dataClear();
               MYApp.app.hideLoading();

               setTimeout(function(){
                   MYApp.app.navigate("#contacts-view");
               },10);
           }, "联系人导入完成", "确定");
       }
    };

    var saveContactToDevice=function(contact){
        contact.save(onSuccess,onError);
    };

    var gotoLoop = function (i) {
        if (i < contactsOBJ.saveDeviceItems.length) {
            //console.log("gotoLoop" + i);
            var test = contactsOBJ.saveDeviceItems[i];

            var singleContact = createContact(test.name, test.mobliePhone, test.fixPhone, test.email, test.deptName);
            saveContactToDevice(singleContact);
        }
    };

    var finish=function(){

       var finshFun=function(){

           MYApp.app.showLoading();

           setTimeout(function(){
               // 全选
               if(ContactCB.chooseAll){
                   for(var j=0;j<contacts.length;j++){
                       if(contacts[j].fixPhone!="" || contacts[j].mobliePhone!="" || contacts[j].email!="")    //fix problem for Nexus5 in android 4.4.2 , can't import the contact that phone number empty
                            contactsOBJ.saveDeviceItems.push(contacts[j]);
                   }
                   console.log("chooseAll-Contacts choosed:"+contactsOBJ.saveDeviceItems.length);

                   if(contactsOBJ.saveDeviceItems.length!=0){
                       ContactCB.contactNumber=contactsOBJ.saveDeviceItems.length;
                       gotoLoop(ContactCB.currentIdx);
                   }
                   else{
                       navigator.notification.alert("无适合导入联系人", function(){
                           MYApp.app.hideLoading();
                       }, "提示", "确定");
                   }
               }
               //部分选择
               else{
                   var allItem=$("#contacts-list-edit").find("input[type=checkbox]");
                   for(var i=0;i<allItem.length;i++)
                   {
                       var curItem=allItem.eq(i);
                       if(curItem.prop("checked"))
                       {
                           var id=$(curItem).attr("id");
                           contactsOBJ.chooseItemsID.push(id);
                       }
                   }

                   for(var j=0;j<contacts.length;j++)
                   {
                       for(var i=0;i<contactsOBJ.chooseItemsID.length;i++)
                       {
                           if(contacts[j].employeeId==contactsOBJ.chooseItemsID[i] &&
                             (contacts[j].fixPhone!="" || contacts[j].mobliePhone!="" || contacts[j].email!=""))    //fix problem for Nexus5 in android 4.4.2 , can't import the contact that phone number empty
                           {
                               //console.log("find one:"+contactsOBJ.chooseItemsID[i]);
                               contactsOBJ.saveDeviceItems.push(contacts[j]);
                           }
                       }
                   }
                   console.log("Contacts choosed:"+contactsOBJ.saveDeviceItems.length);
                   if(contactsOBJ.saveDeviceItems.length!=0){
                       ContactCB.contactNumber=contactsOBJ.saveDeviceItems.length;
                       gotoLoop(ContactCB.currentIdx);
                   }
                   else{
                       navigator.notification.alert("无适合导入联系人", function(){
                           MYApp.app.hideLoading();
                       }, "提示", "确定");
                   }
               }
           },150);
       };

        var infoStr="";
        if(ContactCB.chooseAll){
            infoStr="导入所有联系人耗时较长，请耐心等待"+"\n"+"系统将忽略导入所有字段为空的联系人";
        }
        else
            infoStr="导入时系统将忽略所有字段为空的联系人";
        navigator.notification.alert(infoStr, function(){
                finshFun();
        }, "提示", "确定");

    };

    var getDataFromServer=function(url,scroller){
        //console.log(url);
        if(!scroller)
            MYApp.app.showLoading();

        setTimeout(function(){
            $.ajax({
                type:"GET",
                url:url,
                dataType:"json",
                timeout:1000
            })
            .done(function(json){
                //console.log(json[0].empList);
                contacts=json[0].empList;
                if(scroller!=null)
                        scroller.pullHandled();
                var existListView = $("#contacts-list").data().kendoMobileListView;
                if (existListView) {
                    existListView.destroy();
                    MYApp.app.scroller().reset();
                }

                $("#contacts-list").kendoMobileListView({
                    dataSource: kendo.data.DataSource.create({data: contacts, group: "deptName"}),
                        template: $("#contacts-template").text(),
                        fixedHeaders: true
                    });
                    saveDataLocal(contacts);
                })
            .fail(function(xhr,textStatus){
                //console.log("error code:"+textStatus);
                    if(scroller!=null)
                        scroller.pullHandled();
                    navigator.notification.alert("获取数据失败，请检查网络！", function(){
                    }, "错误", "确定");
            })
            .always(function(){
                    if(!scroller)
                        MYApp.app.hideLoading();
            });
        },150);
    };

    var message=function(){
        if ($("#contactPhone").text()==""){
            navigator.notification.alert("号码为空,无法发送", function(){
            }, "错误", "确定");
        }
        else
            MYApp.app.navigate("#edit-message-view");
    }
    
    var show=function(e){

            $.ajaxSetup({cache:false});
            MYApp.app.showLoading();

            setTimeout(function(){
                //contacts=GetDataLocal();
                //console.log(contacts);
                if(contacts!=null && contacts.length>0){

                    var existListView = $("#contacts-list").data().kendoMobileListView;
                    if (existListView) {
                        existListView.destroy();
                        MYApp.app.scroller().reset();
                    }

                    $("#contacts-list").kendoMobileListView({
                        dataSource: kendo.data.DataSource.create({data: contacts, group: "deptName"}),
                        template: $("#contacts-template").text(),
                        filterable: {
                            field: "name",
                            operator: "startswith"
                        },
                        fixedHeaders: true
                    });
                }
                else{
                    console.log("get data from server");
                    getDataFromServer(contactsOBJ.serverURL,null);
                }

            },150);

            if (kendo.support.mobileOS.ios) {
                //添加刷新滚动
                var scroller = e.view.scroller;

                scroller.setOptions({
                    pullToRefresh: true,
                    pullTemplate:"下拉更新",
                    releaseTemplate:"释放更新",
                    refreshTemplate:"刷新中",
                    pull: function() {
                        pullrefresh(scroller);
                        //setTimeout(function() { scroller.pullHandled(); }, 400);
                    }
                });
            }

            
    }
    
    
