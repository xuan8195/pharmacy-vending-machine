// Initialize the map centered on Singapore
function initMap() {
    try {
        // Create map centered on Singapore
        const map = L.map('singapore-map').setView([1.3521, 103.8198], 12);

        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
            minZoom: 11
        }).addTo(map);
        
        // Fix map display issues
        setTimeout(function() {
            map.invalidateSize();
        }, 100);

        // Custom icons for different location types
        const mallIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48cGF0aCBmaWxsPSIjZWYxOTU2IiBkPSJNMTYgMEMxMC40NzcgMCA2IDQuNDc3IDYgMTBjMCA3LjUgMTAgMTggMTAgMThzMTAtMTAuNSAxMC0xOGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEweiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        });

        const mrtIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48cGF0aCBmaWxsPSIjMTQ2MTdjIiBkPSJNMTYgMEMxMC40NzcgMCA2IDQuNDc3IDYgMTBjMCA3LjUgMTAgMTggMTAgMThzMTAtMTAuNSAxMC0xOGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEweiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        });

        const residentialIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48cGF0aCBmaWxsPSIjNTY5OGE5IiBkPSJNMTYgMEMxMC40NzcgMCA2IDQuNDc3IDYgMTBjMCA3LjUgMTAgMTggMTAgMThzMTAtMTAuNSAxMC0xOGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEweiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        });

        // Array of 20 locations across Singapore
        const locations = [
            // Shopping Malls (7 locations)
            { name: "VivoCity", type: "Shopping Mall", coords: [1.2644, 103.8224], icon: mallIcon },
            { name: "Orchard ION", type: "Shopping Mall", coords: [1.3048, 103.8318], icon: mallIcon },
            { name: "Tampines Mall", type: "Shopping Mall", coords: [1.3525, 103.9446], icon: mallIcon },
            { name: "Jurong Point", type: "Shopping Mall", coords: [1.3397, 103.7063], icon: mallIcon },
            { name: "Northpoint City", type: "Shopping Mall", coords: [1.4289, 103.8358], icon: mallIcon },
            { name: "Westgate", type: "Shopping Mall", coords: [1.3339, 103.7425], icon: mallIcon },
            { name: "Bedok Mall", type: "Shopping Mall", coords: [1.3245, 103.9295], icon: mallIcon },
            
            // MRT Stations (7 locations)
            { name: "Raffles Place MRT", type: "MRT Station", coords: [1.2838, 103.8513], icon: mrtIcon },
            { name: "Marina Bay MRT", type: "MRT Station", coords: [1.2762, 103.8543], icon: mrtIcon },
            { name: "Bishan MRT", type: "MRT Station", coords: [1.3510, 103.8485], icon: mrtIcon },
            { name: "Jurong East MRT", type: "MRT Station", coords: [1.3330, 103.7422], icon: mrtIcon },
            { name: "Serangoon MRT", type: "MRT Station", coords: [1.3500, 103.8735], icon: mrtIcon },
            { name: "Toa Payoh MRT", type: "MRT Station", coords: [1.3327, 103.8475], icon: mrtIcon },
            { name: "Woodlands MRT", type: "MRT Station", coords: [1.4370, 103.7865], icon: mrtIcon },
            
            // Residential Estates (6 locations)
            { name: "Ang Mo Kio Hub", type: "Residential Estate", coords: [1.3693, 103.8483], icon: residentialIcon },
            { name: "Clementi Community Centre", type: "Residential Estate", coords: [1.3152, 103.7649], icon: residentialIcon },
            { name: "Hougang Central", type: "Residential Estate", coords: [1.3711, 103.8924], icon: residentialIcon },
            { name: "Bukit Batok Community Centre", type: "Residential Estate", coords: [1.3491, 103.7492], icon: residentialIcon },
            { name: "Pasir Ris Community Centre", type: "Residential Estate", coords: [1.3721, 103.9474], icon: residentialIcon },
            { name: "Yishun Community Centre", type: "Residential Estate", coords: [1.4304, 103.8354], icon: residentialIcon }
        ];

        // Add markers to the map
        locations.forEach(location => {
            const marker = L.marker(location.coords, { icon: location.icon })
                .addTo(map);
            
            // Create popup content
            const popupContent = `
                <div class="marker-popup">
                    <h4 class="font-bold text-text-primary mb-1">${location.name}</h4>
                    <p class="text-sm text-text-secondary">${location.type}</p>
                </div>
            `;
            
            // Bind popup to marker
            marker.bindPopup(popupContent);
            
            // Show popup on hover
            marker.on('mouseover', function(e) {
                this.openPopup();
            });
            
            // Keep popup open on click, close on mouseout if not clicked
            marker.on('mouseout', function(e) {
                setTimeout(() => {
                    if (!this.isPopupOpen()) {
                        this.closePopup();
                    }
                }, 100);
            });
        });

        // Add legend to the map
        const legend = L.control({ position: 'bottomright' });
        
        legend.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'map-legend');
            div.innerHTML = `
                <div class="legend-item">
                    <span class="legend-marker" style="background-color: #ef1956;"></span>
                    <span>Shopping Malls</span>
                </div>
                <div class="legend-item">
                    <span class="legend-marker" style="background-color: #14617c;"></span>
                    <span>MRT Stations</span>
                </div>
                <div class="legend-item">
                    <span class="legend-marker" style="background-color: #5698a9;"></span>
                    <span>Residential Estates</span>
                </div>
            `;
            return div;
        };
        
        legend.addTo(map);
        
    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('singapore-map')) {
        initMap();
    }
});
