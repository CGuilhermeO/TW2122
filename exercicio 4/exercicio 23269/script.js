// flickr api key: https://www.flickr.com/services/api/misc.api_keys.html || a5dbe90ceeb8a3561dfc760ae33be5f7
// Weather api key: https://home.openweathermap.org/users/sign_in || a9e49b305a5d14cc0790dbf507251ca1


function searchinFlicker(){
    const valueTosearch = $('searchInputID').val();

    $ajax({
        URL: 
        method:
        data{
            text:
            method:
            api_key:
            extras:
            format:

        }
        datatype: 'JSON',

        success: function (Response){
            console.log(response);
            Response.photos.photo.forEach((photo) =>{
                const newimage =$( <img> )
            }
                
            });
        }
        
    });
}