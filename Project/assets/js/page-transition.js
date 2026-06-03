document.addEventListener("DOMContentLoaded", () => {
    // Add click event for all links to animate exit
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            // Check if it's an internal navigation link that shouldn't open a new tab
            if (href && this.hostname === window.location.hostname && !href.startsWith("#") && this.target !== "_blank") {
                e.preventDefault();
                const targetUrl = this.href;
                document.body.classList.add("page-exit");
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 350); // wait for exit animation
            }
        });
    });

    // Add generic click pop effect on interactive elements and container cards
    document.addEventListener("click", function(e) {
        const target = e.target.closest('a, button, .method-card, .content-section');
        if(target && !target.classList.contains('floating-mascot')) {
            target.classList.remove('click-effect');
            void target.offsetWidth; // trigger reflow
            target.classList.add('click-effect');
            setTimeout(() => {
                target.classList.remove('click-effect');
            }, 300);
        }
    });
    
    // Draggable Mascot Logic (supports #floatMascot and #fc)
    const mascots = [document.getElementById('floatMascot'), document.getElementById('fc')];
    
    mascots.forEach(mascot => {
        if (!mascot) return;

        let isDragging = false;
        let startX, startY, initialX, initialY;
        let moved = false;

        const dragStart = (e) => {
            if (e.target.closest('.fm-bubble, .fc-bubble')) return; // Dont drag from bubble
            moved = false;

            if (e.type === "touchstart") {
                initialX = e.touches[0].clientX;
                initialY = e.touches[0].clientY;
            } else {
                initialX = e.clientX;
                initialY = e.clientY;
            }

            const rect = mascot.getBoundingClientRect();
            startX = rect.left;
            startY = rect.top;
            isDragging = true;
            
            mascot.style.transition = 'none';
        };

        const drag = (e) => {
            if (!isDragging) return;
            
            let currentX, currentY;
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX;
                currentY = e.touches[0].clientY;
            } else {
                currentX = e.clientX;
                currentY = e.clientY;
            }

            // Only consider it a drag if moved more than 5px to avoid preventing accidental clicks
            if (Math.abs(currentX - initialX) > 5 || Math.abs(currentY - initialY) > 5) {
                moved = true;
                if (e.type === "touchmove") e.preventDefault(); 
            }

            if (!moved) return;

            let newLeft = startX + (currentX - initialX);
            let newTop = startY + (currentY - initialY);

            if (newLeft < 0) newLeft = 0;
            if (newTop < 0) newTop = 0;
            if (newLeft + mascot.offsetWidth > window.innerWidth) newLeft = window.innerWidth - mascot.offsetWidth;
            if (newTop + mascot.offsetHeight > window.innerHeight) newTop = window.innerHeight - mascot.offsetHeight;

            mascot.style.right = 'auto'; 
            mascot.style.bottom = 'auto'; 
            mascot.style.left = newLeft + "px";
            mascot.style.top = newTop + "px";
        };

        const dragEnd = (e) => {
            if (!isDragging) return;
            isDragging = false;
            mascot.style.transition = ''; // Reset to CSS defined transition
        };

        mascot.addEventListener("mousedown", dragStart);
        document.addEventListener("mousemove", drag, { passive: false });
        document.addEventListener("mouseup", dragEnd);

        mascot.addEventListener("touchstart", dragStart, { passive: true });
        document.addEventListener("touchmove", drag, { passive: false });
        document.addEventListener("touchend", dragEnd);
        
        mascot.addEventListener('click', (e) => {
            if (moved) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    });
});
