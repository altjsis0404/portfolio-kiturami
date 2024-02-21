AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product_mo').addEventListener('change', function() {
        window.location.href = this.value;
    });
    document.getElementById('service_mo').addEventListener('change', function() {
        window.location.href = this.value;
    });
    document.getElementById('PRcenter_mo').addEventListener('change', function() {
        window.location.href = this.value;
    });
    document.getElementById('company_mo').addEventListener('change', function() {
        window.location.href = this.value;
    });
});