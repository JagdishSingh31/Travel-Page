function initMap() { 

        var location = {lat: -25.363, lng: 131.044}; 

        var map = new google.maps.Map(document.getElementById('googleMap'), { 

          zoom: 4, 

          center:location 

        });

        var marker = new google.maps.Marker({ 

          position: location, 

          map: map 

        }); 
        
        
      } 


<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMcmjpKGVbHoPdpqcbNSIKAeOoVqOubAk&callback=initMap">
</script>