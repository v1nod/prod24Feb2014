(function ($) {

    Drupal.behaviors.grievanceFormText = {
        
        attach: function(context, settings) {
            // Make select use chosen plugin.
            $('.webform-client-form .webform-component-date select').chosen();
            
            /* Added by Astha for making date select-boxes much more user-friendly starts */
            
            $('.webform-client-form .spanish_dob .form-type-select select').chosen();
            
            $('.webform-client-form .spanish_dop .form-type-select select').chosen();
            
            $('.webform-client-form .chinese_dob .form-type-select select').chosen();
            
            $('.webform-client-form .chinese_dop .form-type-select select').chosen();
            
            $('.webform-client-form .vietnamese_dob .form-type-select select').chosen();
            
            $('.webform-client-form .vietnamese_dop .form-type-select select').chosen();
            
            /* Added by Astha for making date select-boxes much more user-friendly ends */
            
            // Language
            $('#edit-submitted-language-select').chosen().change(function(){
                
                url = $(this).val();
                
                if ( url != '' ) {
                    
                    window.location.href=url;
                    
                }

            });
            // Get first paragraph into div.truncated

            $('.field-name-body .field-item').append('<div class="gf truncated"></div>');

            $('.field-name-body .field-item > *:first').appendTo('.field-name-body .field-item > .gf.truncated');

            // Get rest of the text into div.rest

            $('.field-name-body .field-item').append('<div id="gf-rest" class="gf rest"></div>');

            $('.field-name-body .field-item > *:not(.gf)').appendTo('.field-name-body .field-item > .gf.rest');



            // Hide rest

            $('#gf-rest').hide();

            // Add "Read more" button.
            
            
            // Add "Read more" button.
            //            if ($('body').hasClass('page-node-60224')) { //chinese
            //                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('阅读全文') + '</a>';
            //            }else if ($('body').hasClass('page-node-60232')) { //vietnamese
            //                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('đọc thêm') + '</a>';
            //            }else if ($('body').hasClass('page-node-60231')) { // spanish
            //                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('Leer más') + '</a>';
            //            }else{
            //                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('Read more') + '</a>';
            //            }

            // Add "Read more" button.
            if ($('body').hasClass('page-node-60224') || $('body').hasClass('page-node-60236')) { //chinese
                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('阅读全文') + '</a>';
            }else if ($('body').hasClass('page-node-60232') || $('body').hasClass('page-node-60235')) { //vietnamese
                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('đọc thêm') + '</a>';
            }else if ($('body').hasClass('page-node-60231') || $('body').hasClass('page-node-60234')) { // spanish
                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('Leer más') + '</a>';
            }else {
                read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal . t('Read more') + '</a>';
            }

            $('.field-name-body .field-item .gf.truncated > *').append(read_more);

            //            read_more = '&nbsp;<a id="gf-read-more" href="#read-more">' + Drupal.t('Read more') + '</a>';
            //            $('.field-name-body .field-item .gf.truncated > *').append(read_more);
            // Add click event
            $('#gf-read-more').click(function(event){
                $('#gf-rest').slideDown('fast');
                $(this).hide();
                event.preventDefault();
            });

            $('#gf-read-more').click(function(event){
                $('#gf-rest').slideDown('fast');
                $(this).hide();
                event.preventDefault();

            });



            // Add class to body for when the user previews the form

            if ( $('#edit-submitted-summary').length > 0 ) {

                $('body').addClass('webform-preview');

                $('#edit-submitted-summary .webform-component').each(function(index){

                    label = $(this).find('label').remove();

                    text = $.trim($(this).text());

                    if ( text == '' ) {

                        $(this).remove();

                        return;

                    }

                    html = $(this).html();

                    $(this).html('');

                    $(this).append(label);

                    $(this).append('<div class="content"></div>');

                    $(this).find('.content').append(html);

                });



                // Reverse order of Edit && Submit buttons

                submit = $('.webform-client-form .form-actions #edit-submit').remove();

                $('.webform-client-form .form-actions').prepend(submit);

            }
            
            /* code added by Astha to add webform-preview class to body of vietnamese form  strats from here */
            
            
            if ( $('#edit-submitted-xem-truoc-spa').length > 0 ) {

                $('body').addClass('webform-preview');

                $('#edit-submitted-xem-truoc-spa .webform-component').each(function(index){

                    label = $(this).find('label').remove();

                    text = $.trim($(this).text());

                    if ( text == '' ) {

                        $(this).remove();

                        return;

                    }

                    html = $(this).html();

                    $(this).html('');

                    $(this).append(label);

                    $(this).append('<div class="content"></div>');

                    $(this).find('.content').append(html);

                });



                // Reverse order of Edit && Submit buttons

                submit = $('.webform-client-form .form-actions #edit-submit').remove();

                $('.webform-client-form .form-actions').prepend(submit);

            }
            
            /* code added by Astha to add webform-preview class to body ends here */
            
            
            /* code added by Astha to add webform-preview class to body of spanish form  strats from here */
            
            
            if ( $('#edit-submitted-vista-previa-resumen').length > 0 ) {

                $('body').addClass('webform-preview');

                $('#edit-submitted-vista-previa-resumen .webform-component').each(function(index){

                    label = $(this).find('label').remove();

                    text = $.trim($(this).text());

                    if ( text == '' ) {

                        $(this).remove();

                        return;

                    }

                    html = $(this).html();

                    $(this).html('');

                    $(this).append(label);

                    $(this).append('<div class="content"></div>');

                    $(this).find('.content').append(html);

                });

                /* code added by Astha to add webform-preview class to body ends here */

                // Reverse order of Edit && Submit buttons

                submit = $('.webform-client-form .form-actions #edit-submit').remove();

                $('.webform-client-form .form-actions').prepend(submit);

            }
            
            /* code added by Astha to add webform-preview class to body ends here */
            
            /* code added by Astha to add webform-preview class to body of chinese form  strats from here */
            
            
            if ( $('#edit-submitted-yu-lan-preview1').length > 0 ) {

                $('body').addClass('webform-preview');

                $('#edit-submitted-yu-lan-preview1 .webform-component').each(function(index){

                    label = $(this).find('label').remove();

                    text = $.trim($(this).text());

                    if ( text == '' ) {

                        $(this).remove();

                        return;

                    }

                    html = $(this).html();

                    $(this).html('');

                    $(this).append(label);

                    $(this).append('<div class="content"></div>');

                    $(this).find('.content').append(html);

                });

                /* code added by Astha to add webform-preview class to body ends here */

                // Reverse order of Edit && Submit buttons

                submit = $('.webform-client-form .form-actions #edit-submit').remove();

                $('.webform-client-form .form-actions').prepend(submit);

            }
            
            /* code added by Astha to add webform-preview class to body ends here */


            // Regexp for Validations

            name_regexp = /[^a-z- ]/i;

            zip_regexp = /[0-9]{5}/;

            phone_regexp = /[^0-9-()# ]/;



            /**

* Funtion to determine if a webform is valid on the required fields.

*/

            function validate_webform(form) {

                // Find the required fields and findout if there were filled

                valid = true;

                $('#edit-submitted-member-name, #edit-submitted-member-id, #edit-submitted-birthdate-month, #edit-submitted-hui-yuan-ming-cheng-' +

                    '#edit-submitted-birthdate-day, #edit-submitted-birthdate-year, #edit-submitted-problem' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });



                // Member Name

                match = name_regexp.exec($('#edit-submitted-member-name').val());

                if ( match != null ) {

                    // There should'n be numbers at member name

                    valid = false;

                }



                // Name of person filling if different

                other_person = $.trim($('#edit-submitted-person-filling').val());

                if ( other_person != '' ) {

                    match = name_regexp.exec(other_person);

                    if ( match != null ) {

                        // There should'n be numbers at name of person

                        valid = false;

                    }

                }



                // Phones

                $('#edit-submitted-phone-home, #edit-submitted-phone-work, #edit-submitted-telephone').each(function(index){

                    phone = $.trim($(this).val());

                    if ( phone != '' ) {

                        match = phone_regexp.exec(phone);

                        if ( match != null ) {

                            // There should be only numbers, -, ( and ).

                            valid = false;

                        }

                    }

                });



                // Zipcode

                zip = $.trim($('#edit-submitted-zip-code').val());

                if ( zip != '' ) {

                    match = zip_regexp.exec(zip);

                    if ( match == null ) {

                        // There should be only 5 numbers.

                        valid = false;

                    }

                }



                if ( valid == true ) {

                    $('#edit-next').removeClass('disabled');

                } else {

                    $('#edit-next').addClass('disabled');

                }

                return valid;

            }



            // Attach onchange event on fields to enable or disable the submit button.

            $('#edit-submitted-member-name, #edit-submitted-member-id, #edit-submitted-birthdate-month,' +

                '#edit-submitted-birthdate-day, #edit-submitted-birthdate-year, #edit-submitted-problem,' +

                '#edit-submitted-phone-home, #edit-submitted-phone-work, #edit-submitted-telephone').keyup(function(){

                validate_webform($('form.webform-client-form'));

            });

            

            validate_webform($('webform-client-form-67'));                /* English */
            validate_webform_chinese($('webform-client-form-60224'));     /* Chinese */
            validate_webform_spanish($('webform-client-form-60231'));     /* Spanish */
            validate_webform_vietnamese($('webform-client-form-60232'));  /* Vietnamese */
            
            
            validate_webform_spanish_cal($('webform-client-form-60234'));     /* Spanish Cal MediConnect*/
            validate_webform_vietnamese_cal($('webform-client-form-60235'));     /* Spanish Cal MediConnect*/
            validate_webform_chinese_cal($('webform-client-form-60236'));     /* Chinese Cal MediConnect */
            
            
            
            function validate_webform_chinese(form) {
                
                valid = true;

                $('#edit-submitted-hui-yuan-ming-cheng-, #edit-submitted-hui-yuan-id, #edit-submitted-dob-dob-month, #edit-submitted-dob-dob-day-31' +

                    '#edit-submitted-dob-dob-year, #edit-submitted-xiang-xi-miao-shu-wen-ti-describe-the-problem-in-detail' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });
                
                if ( valid == true ) {

                    $('#webform-client-form-60224 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60224 #edit-next').addClass('disabled');

                }

                return valid;
            }
            
            // Attach onchange event on fields to enable or disable the submit button of chinese form.

            $('#edit-submitted-hui-yuan-ming-cheng-, #edit-submitted-hui-yuan-id, #edit-submitted-dob-dob-month,' +

                '#edit-submitted-dob-dob-day-31, #edit-submitted-dob-dob-year, #edit-submitted-xiang-xi-miao-shu-wen-ti-describe-the-problem-in-detail').keyup(function(){

                validate_webform_chinese($('form.webform-client-form'));

            });
            
            
            
            /* 
             * Funtion to determine if a webform is valid on the required fields (Spanish Form)
            */
            function validate_webform_spanish(form) {
                
                // Find the required fields and findout if there were filled

                valid = true;

                $('#edit-submitted-nombre-del-miembro, #edit-submitted-numero-de-identificacion-del-miembro, #edit-submitted-dobs-dob-months, #edit-submitted-dobs-sdob-day-31' +

                    '#edit-submitted-dobs-dob-years, #edit-submitted-describa-el-problema-detalladamente ' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });
                
                if ( valid == true ) {

                    $('#webform-client-form-60231 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60231 #edit-next').addClass('disabled');

                }

                return valid;
            }
            
            // Attach onchange event on fields to enable or disable the submit button of spanish form.


            $('#edit-submitted-nombre-del-miembro, #edit-submitted-numero-de-identificacion-del-miembro, #edit-submitted-dobs-dob-months,' +

                '#edit-submitted-dobs-sdob-day-31, #edit-submitted-dobs-dob-years, #edit-submitted-describa-el-problema-detalladamente,').keyup(function(){

                validate_webform_spanish($('form.webform-client-form'));

            });
            
            
            

            /* 
             * Funtion to determine if a webform is valid on the required fields (Vietnamese Form)
            */

            function validate_webform_vietnamese(form) {

                // Find the required fields and findout if there were filled

                valid = true;

                $('#edit-submitted-ten-hoi-vien, #edit-submitted-so-id-hoi-vien,#edit-submitted-dobv-dob-monthv, #edit-submitted-dobv-vdob-day-31,#edit-submitted-dobv-dob-yearv ,' +

                    '#edit-submitted-mo-ta-chi-tiet-ve-van-de' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });


                if ( valid == true ) {

                    $('#webform-client-form-60232 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60232 #edit-next').addClass('disabled');

                }

                return valid;

            }



            // Attach onchange event on fields to enable or disable the submit button.

            $('#edit-submitted-ten-hoi-vien, #edit-submitted-so-id-hoi-vien,#edit-submitted-dobv-dob-monthv, ' +

                '#edit-submitted-dobv-vdob-day-31, #edit-submitted-dobv-dob-yearv, #edit-submitted-mo-ta-chi-tiet-ve-van-de').keyup(function(){

                validate_webform_vietnamese($('form.webform-client-form'));

            });
      

          
            /* 
             * Funtion to determine if a webform is valid on the required fields (Spanish Form- Cal MediConnect)
            */
            function validate_webform_spanish_cal(form) {
                
                // Find the required fields and findout if there were filled

                valid = true;

                $('#edit-submitted-nombre-del-miembro, #edit-submitted-numero-de-identificacion-del-miembro, #edit-submitted-dobs-dob-months, #edit-submitted-dobs-sdob-day-31' +

                    '#edit-submitted-dobs-dob-years, #edit-submitted-describa-el-problema-detalladamente ' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });
                
                if ( valid == true ) {

                    $('#webform-client-form-60234 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60234 #edit-next').addClass('disabled');

                }

                return valid;
            }
            
            // Attach onchange event on fields to enable or disable the submit button of spanish form.


            $('#edit-submitted-nombre-del-miembro, #edit-submitted-numero-de-identificacion-del-miembro, #edit-submitted-dobs-dob-months,' +

                '#edit-submitted-dobs-sdob-day-31, #edit-submitted-dobs-dob-years, #edit-submitted-describa-el-problema-detalladamente,').keyup(function(){

                validate_webform_spanish_cal($('form.webform-client-form'));

            });
            
            /* 
             * Funtion to determine if a webform is valid on the required fields (Spanish Form- Cal MediConnect)
            */
            function validate_webform_vietnamese_cal(form) {
                
                // Find the required fields and findout if there were filled

                valid = true;

                $('#edit-submitted-ten-hoi-vien, #edit-submitted-so-id-hoi-vien,#edit-submitted-dobv-dob-monthv, #edit-submitted-dobv-vdob-day-31,#edit-submitted-dobv-dob-yearv ,' +

                    '#edit-submitted-mo-ta-chi-tiet-ve-van-de' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });
                
                if ( valid == true ) {

                    $('#webform-client-form-60235 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60235 #edit-next').addClass('disabled');

                }

                return valid;
            }
            
            // Attach onchange event on fields to enable or disable the submit button of spanish form.


            $('#edit-submitted-ten-hoi-vien, #edit-submitted-so-id-hoi-vien,#edit-submitted-dobv-dob-monthv, ' +

                '#edit-submitted-dobv-vdob-day-31, #edit-submitted-dobv-dob-yearv, #edit-submitted-mo-ta-chi-tiet-ve-van-de').keyup(function(){

                validate_webform_vietnamese_cal($('form.webform-client-form'));

            });
            
            function validate_webform_chinese_cal(form) {
                
                valid = true;

                $('#edit-submitted-hui-yuan-ming-cheng-, #edit-submitted-hui-yuan-id, #edit-submitted-dob-dob-month, #edit-submitted-dob-dob-day-31' +

                    '#edit-submitted-dob-dob-year, #edit-submitted-xiang-xi-miao-shu-wen-ti-describe-the-problem-in-detail' ).each(function(){

                    this_value = $.trim($(this).val());

                    if ( this_value == '' ) {

                        valid = false;

                    }

                });
                
                if ( valid == true ) {

                    $('#webform-client-form-60236 #edit-next').removeClass('disabled');

                } else {

                    $('#webform-client-form-60236 #edit-next').addClass('disabled');

                }

                return valid;
            }
            
            // Attach onchange event on fields to enable or disable the submit button of chinese form of Cal MediConnect.

            $('#edit-submitted-hui-yuan-ming-cheng-, #edit-submitted-hui-yuan-id, #edit-submitted-dob-dob-month,' +

                '#edit-submitted-dob-dob-day-31, #edit-submitted-dob-dob-year, #edit-submitted-xiang-xi-miao-shu-wen-ti-describe-the-problem-in-detail').keyup(function(){

                validate_webform_chinese_cal($('form.webform-client-form'));

            });
            
      

 

      
      

      



            if (($('body').hasClass('page-node-67')) || ($('body').hasClass('page-node-60233')) ) {

                $('#webform-component-member-name').append('<div class="error_message" style="display: none;">Please enter a valid name</div>');

                $('#webform-component-member-id').append('<div class="error_message" style="display: none;">Please enter a valid member id </div>');

                $('#webform-component-birthdate').append('<div class="error_message" style="display: none;" id="error_message_birthdate">Please select your birth date</div>');

                $('#webform-component-problem').append('<div class="error_message" style="display: none;">Please enter a description of the problem</div>');

                $('#webform-component-zip-code').append('<div class="error_message" style="display: none;" id="error_message_zip">Please enter a valid Zip Code</div>');

                $('#webform-component-phone-home, #webform-component-phone-work, #webform-component-telephone').append('<div class="error_message" style="display: none;">Please enter a valid phone number</div>');
            }

            else if ($('body').hasClass('page-node-60231') || ($('body').hasClass('page-node-60234')) ) {
                
                $('#webform-component-nombre-del-miembro').append('<div class="error_message" style="display: none;">Por favor ingrese un nombre válido</div>');

                $('#webform-component-numero-de-identificacion-del-miembro').append('<div class="error_message" style="display: none;">Ingresa una ID de miembro válido</div>');

                $('#webform_spanish_dob').append('<div class="error_message" style="display: none;" id="error_message_birthdate">Por favor seleccione su fecha de nacimiento</div>');

                $('#webform-component-fecha-de-nacimiento').append('<div class="error_message" style="display: none;" id="error_message_birthdate_spanish">Por favor seleccione su fecha de nacimiento</div>');

                $('#webform-component-describa-el-problema-detalladamente').append('<div class="error_message" style="display: none;">Por favor, introduzca una descripción del problema</div>');
            }

            else if ($('body').hasClass('page-node-60232') || ($('body').hasClass('page-node-60235'))) {

                $('#webform-component-ten-hoi-vien').append('<div class="error_message" style="display: none;">Xin điền tên hợp lệ</div>');

                $('#webform-component-so-id-hoi-vien').append('<div class="error_message" style="display: none;">Xin điền số thành viên hợp lệ</div>');
                
                $('#webform_vietnamese_dob').append('<div class="error_message" style="display: none;" id="error_message_birthdate">Xin lựa ngày, tháng, năm sinh</div>');

                $('#webform-component-mo-ta-chi-tiet-ve-van-de').append('<div class="error_message" style="display: none;" id="error_message_birthdate">Xin điền chi tiết về vấn đề</div>');
            }

            /* Added by Astha starts */
            else if ($('body').hasClass('page-node-60224')|| ($('body').hasClass('page-node-60236')) ) {
                
                $('#webform-component-hui-yuan-ming-cheng-').append('<div class="error_message" style="display: none;">请输入有效的名称</div>');
                
                $('#webform-component-hui-yuan--id').append('<div class="error_message" style="display: none;">请输入有效的会员 ID</div>');
                
                $('#webform_chinese_dob').append('<div class="error_message" style="display: none;" id="error_message_birthdate">请选择你的出生日期</div>');
                
                $('#webform-component-xiang-xi-miao-shu-wen-ti--describe-the-problem-in-detail').append('<div class="error_message" style="display: none;">请输入问题描述</div>');
                
                $('#webform-component-you-zheng-bian-ma--zipcode').append('<div class="error_message" style="display: none;">请输入有效的邮政编码</div>');
                
                
            }
            /* Added by Astha ends */
    







            $('#edit-submitted-member-name').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {

                    // Not empty, lets validate it

                    match = name_regexp.exec(this_value);
                    
                    if ( match != null ) {

                        $(this).parent().find('.error_message').show('fast');

                    } else {

                        $(this).parent().find('.error_message').hide('fast');

                    }

                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            });
      
      
      
      
            /* By Astha for chinese starts */
  
            $('#edit-submitted-hui-yuan-ming-cheng-').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {
                    
                    $(this).parent().find('.error_message').hide('fast');
                

                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            });
            
            $('#edit-submitted-hui-yuan-id').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value == '' ) {

                    $(this).parent().find('.error_message').show('fast');

                } else {

                    $(this).parent().find('.error_message').hide('fast');

                }

            });
            
            $('#edit-submitted-xiang-xi-miao-shu-wen-ti-describe-the-problem-in-detail').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value == '' ) {

                    $(this).parent().parent().find('.error_message').show('fast');

                } else {

                    $(this).parent().parent().find('.error_message').hide('fast');

                }

            });


            $('#edit-submitted-you-zheng-bian-ma-zipcode').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value == '' ) {

                    $(this).parent().find('.error_message').show('fast');

                } else {

                    $(this).parent().find('.error_message').hide('fast');

                }

            });
            /* By Astha ends */
            
            
            /* By Vinod for spanish starts */
            $('#edit-submitted-nombre-del-miembro').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {
                    
                    $(this).parent().find('.error_message').hide('fast');
                

                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            });
				 
            $('#edit-submitted-numero-de-identificacion-del-miembro').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {
                    
                    $(this).parent().find('.error_message').hide('fast');
                

                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            }); 
			
            $('#edit-submitted-describa-el-problema-detalladamente').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {
                    
                    $(this).parent().parent().find('.error_message').hide('fast');
                

                } else {

                    $(this).parent().parent().find('.error_message').show('fast');

                }

            });
            
            /* By Vinod for spanish ends */
            
            /* By Vinod for vietnamese starts */
            $('#edit-submitted-ten-hoi-vien').blur(function(){
			
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {                    
                    $(this).parent().find('.error_message').hide('fast');
                
                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            });
				 
            $('#edit-submitted-so-id-hoi-vien').blur(function(){
			
                this_value = $.trim($(this).val());
                if ( this_value != '' ) {                    
                    $(this).parent().find('.error_message').hide('fast');
                
                } else {

                    $(this).parent().find('.error_message').show('fast');

                }

            });
			
            $('#edit-submitted-mo-ta-chi-tiet-ve-van-de').blur(function(){
			
                this_value = $.trim($(this).val());

                if ( this_value != '' ) { 
				
                    $(this).parent().parent().find('.error_message').hide('fast');
                
                } else {

                    $(this).parent().parent().find('.error_message').show('fast');

                }

            });		 
            /* By Vinod for vietnamise ends */
            


            $('#edit-submitted-member-id').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value == '' ) {

                    $(this).parent().find('.error_message').show('fast');

                } else {

                    $(this).parent().find('.error_message').hide('fast');

                }

            });



            $('#edit-submitted-problem').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value == '' ) {

                    $(this).parent().parent().find('.error_message').show('fast');

                } else {

                    $(this).parent().parent().find('.error_message').hide('fast');

                }

            });



            $('#edit-submitted-zip-code').blur(function(){

                this_value = $.trim($(this).val());

                if ( this_value != '' ) {

                    // Not empty, lets validate it

                    match = zip_regexp.exec(this_value);

                    if ( match == null ) {

                        $(this).parent().find('.error_message').show('fast');

                    } else {

                        $(this).parent().find('.error_message').hide('fast');

                    }

                } else {

                    $(this).parent().find('.error_message').hide('fast');

                }

            });



            $('#edit-submitted-phone-home, #edit-submitted-phone-work, #edit-submitted-telephone').blur(function(){

                phone = $.trim($(this).val());

                if ( phone != '' ) {

                    // Not empty, lets validate it

                    match = phone_regexp.exec(phone);

                    if ( match != null ) {

                        // There should be only numbers, - and ().

                        $(this).parent().find('.error_message').show('fast');

                    } else {

                        $(this).parent().find('.error_message').hide('fast');

                    }

                } else {

                    $(this).parent().find('.error_message').hide('fast');

                }

            });



            $('#edit-submitted-phone-home').focus(function(){

                if ( $('#edit-submitted-birthdate-month').val() == '' ) {

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-birthdate-day').val() == '' ) {

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-birthdate-year').val() == '' ) {

                    $('#error_message_birthdate').show('fast');

                } else {

                    $('#error_message_birthdate').hide('fast');

                }

            });
            
            
            /* Code by Astha for dob validation starts on SPANISH form */
            $('#edit-submitted-telefono-durante-el-dia').focus(function(){ 

                if ( $('#edit-submitted-dobs-dob-months').val() == 'month' ) { 

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dobs-sdob-day-31').val() == 'day' ) {

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dobs-dob-years').val() == 'year' ) {

                    $('#error_message_birthdate').show('fast');

                } else {

                    $('#error_message_birthdate').hide('fast');

                }

            });
            /* Code by Astha for dob validation ends */
            
            
            /* Code by Astha for dob validation starts on VIETNAMESE form */
            $('#edit-submitted-dien-thoai-nha').focus(function(){ 

                if ( $('#edit-submitted-dobv-dob-monthv').val() == 'month' ) { 

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dobv-vdob-day-31').val() == 'day' ) {

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dobv-dob-yearv').val() == 'year' ) {

                    $('#error_message_birthdate').show('fast');

                } else {

                    $('#error_message_birthdate').hide('fast');

                }

            });
            /* Code by Astha for dob validation ends */
            
            
            /* Code by Astha for dob validation starts on CHINESE form */
            $('#edit-submitted-zhu-zhai-dian-hua-phone').focus(function(){ 

                if ( $('#edit-submitted-dob-dob-month').val() == 'month' ) { 

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dob-dob-day-31').val() == 'day' ) {

                    $('#error_message_birthdate').show('fast');

                } else if ( $('#edit-submitted-dob-dob-year').val() == 'year' ) {

                    $('#error_message_birthdate').show('fast');

                } else {

                    $('#error_message_birthdate').hide('fast');

                }

            });
            /* Code by Astha for dob validation ends */
            

            // Add Reset button

            $('.page-node-60227 #edit-submit, #edit-next').parent().append('<input type="reset" id="edit-reset" value="' + Drupal.t('Clear') + '" class="form-submit"/>');



            $('#edit-reset').click(function(event){

                $('form.webform-client-form')[0].reset();

                validate_webform($('form.webform-client-form'));

                event.preventDefault();

            });



            $('.page-node-60227 #edit-submit, #edit-next').addClass('main-submit');



            // Validation for Webform

            $('form.webform-client-form').submit(function(){

                if ( $('.main-submit').hasClass('disabled') ) {

                    return false;

                }

                return validate_webform(this);

            });

            $('#edit-reset').click(function(){

                $('.webform-client-form label').show();

                $('.error_message').hide();

                $('.form-select').trigger("liszt:updated");

            //$('#edit-submitted-birthdate-day').trigger("liszt:updated");

            //$('#edit-submitted-birthdate-year').trigger("liszt:updated");

            });

        }

    };

})(jQuery);