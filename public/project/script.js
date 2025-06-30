// CMMS System JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
    
    // Setup navigation
    setupNavigation();
    
    // Initialize charts
    initializeCharts();
    
    // Setup form validations
    setupFormValidations();
    
    // Setup search functionality
    setupSearch();
});

// Initialize Application
function initializeApp() {
    console.log('CMMS System Initialized');
    
    // Show dashboard by default
    showSection('dashboard');
    
    // Setup tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Navigation Setup
function setupNavigation() {
    // Sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Add click event to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            navbarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get section to show
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                showSection(sectionId);
            }
        });
    });
    
    // Add click event to navbar links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                sidebarLinks.forEach(l => l.classList.remove('active'));
                navbarLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Get section to show
                const href = this.getAttribute('href');
                const sectionId = href.substring(1);
                showSection(sectionId);
                
                // Find corresponding sidebar link and activate it
                const correspondingSidebarLink = document.querySelector(`.sidebar .nav-link[href="${href}"]`);
                if (correspondingSidebarLink) {
                    correspondingSidebarLink.classList.add('active');
                }
            }
        });
    });
}

// Show Section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
        
        // Update page title
        updatePageTitle(sectionId);
    }
}

// Update Page Title
function updatePageTitle(sectionId) {
    const titles = {
        'dashboard': 'داشبورد مدیریت',
        'equipment': 'مدیریت تجهیزات',
        'maintenance': 'نگهداری پیشگیرانه',
        'repairs': 'سوابق تعمیرات',
        'staff': 'مدیریت پرسنل',
        'reports': 'گزارشات و تحلیل',
        'settings': 'تنظیمات سیستم'
    };
    
    const title = titles[sectionId] || 'سیستم مدیریت نگهداری';
    document.title = `${title} - سیستم مدیریت نگهداری و تعمیرات`;
}

// Initialize Charts
function initializeCharts() {
    // Area Chart
    const areaCtx = document.getElementById('myAreaChart');
    if (areaCtx) {
        new Chart(areaCtx, {
            type: 'line',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
                datasets: [{
                    label: 'تعمیرات انجام شده',
                    data: [12, 19, 15, 25, 22, 18],
                    borderColor: 'rgb(102, 126, 234)',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Pie Chart
    const pieCtx = document.getElementById('myPieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'doughnut',
            data: {
                labels: ['فعال', 'در تعمیر', 'خراب', 'غیرفعال'],
                datasets: [{
                    data: [220, 15, 5, 7],
                    backgroundColor: [
                        '#1cc88a',
                        '#f6c23e',
                        '#e74a3b',
                        '#6c757d'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }
}

// Form Validations
function setupFormValidations() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

// Search Functionality
function setupSearch() {
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="جستجو"]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.card').querySelector('table tbody');
            
            if (table) {
                const rows = table.querySelectorAll('tr');
                
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
        });
    });
}

// Equipment Management Functions
function addEquipment() {
    // This would typically send data to server
    console.log('Adding new equipment...');
    
    // Show success message
    showNotification('تجهیز جدید با موفقیت اضافه شد', 'success');
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addEquipmentModal'));
    if (modal) {
        modal.hide();
    }
}

function editEquipment(id) {
    console.log('Editing equipment:', id);
    // Implementation for editing equipment
}

function deleteEquipment(id) {
    if (confirm('آیا از حذف این تجهیز اطمینان دارید؟')) {
        console.log('Deleting equipment:', id);
        showNotification('تجهیز با موفقیت حذف شد', 'success');
    }
}

// Maintenance Functions
function completeMaintenance(id) {
    console.log('Completing maintenance:', id);
    showNotification('نگهداری با موفقیت تکمیل شد', 'success');
}

function saveChecklist() {
    const checkedItems = document.querySelectorAll('.checklist input[type="checkbox"]:checked');
    console.log('Saving checklist with', checkedItems.length, 'completed items');
    showNotification('چک‌لیست با موفقیت ثبت شد', 'success');
}

// Report Functions
function generateReport() {
    console.log('Generating report...');
    showNotification('گزارش در حال تولید است...', 'info');
    
    // Simulate report generation
    setTimeout(() => {
        showNotification('گزارش با موفقیت تولید شد', 'success');
    }, 2000);
}

function exportToExcel() {
    console.log('Exporting to Excel...');
    showNotification('فایل Excel در حال آماده‌سازی است...', 'info');
}

function exportToPDF() {
    console.log('Exporting to PDF...');
    showNotification('فایل PDF در حال آماده‌سازی است...', 'info');
}

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 80px; left: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Utility Functions
function formatDate(date) {
    // Convert to Persian date format
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('fa-IR', options);
}

function formatCurrency(amount) {
    // Format currency in Rial
    return new Intl.NumberFormat('fa-IR').format(amount) + ' ریال';
}

// Data Management (Mock functions for demo)
const mockData = {
    equipment: [
        { id: 1, code: 'EQ-001', name: 'پمپ آب اصلی', model: 'P-500', manufacturer: 'گراندفوس', location: 'سالن موتورخانه', status: 'فعال' },
        { id: 2, code: 'EQ-002', name: 'کمپرسور هوا', model: 'AC-750', manufacturer: 'اطلس کوپکو', location: 'سالن تولید', status: 'در تعمیر' },
        { id: 3, code: 'EQ-003', name: 'موتور الکتریکی', model: 'M-300', manufacturer: 'زیمنس', location: 'خط تولید A', status: 'فعال' }
    ],
    
    maintenance: [
        { id: 1, equipment: 'پمپ آب اصلی', type: 'تعویض روغن', date: '1402/12/20', status: 'معوق' },
        { id: 2, equipment: 'کمپرسور هوا', type: 'بازرسی فیلتر', date: '1402/12/25', status: 'برنامه‌ریزی شده' },
        { id: 3, equipment: 'موتور الکتریکی', type: 'بررسی اتصالات', date: '1402/12/18', status: 'انجام شده' }
    ]
};

// Export functions for global access
window.CMMS = {
    addEquipment,
    editEquipment,
    deleteEquipment,
    completeMaintenance,
    saveChecklist,
    generateReport,
    exportToExcel,
    exportToPDF,
    showNotification,
    mockData
};