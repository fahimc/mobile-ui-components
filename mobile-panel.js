(function() {
    let PanelContainer = {
        CONTAINER_ATTRIBUTE: 'panel-container',
        PANEL_ATTRIBUTE: 'panel',
        panelHolder: null,
        panelLength: 0,
        index: 0,
        init() {
            document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
        },
        onLoaded() {
            this.setPanelHolder();
            this.setPanels();
            this.setInstance();
        },
        setPanelHolder() {
            this.panelHolder = document.querySelector('[ ' + this.CONTAINER_ATTRIBUTE + ']');
            if (!this.panelHolder) return;
            this.panelHolder.style += 'display:block;position:relative;width:100vw;height:100vh;overflow:hidden;transition: transform 0.5s ease-out;';
        },
        setPanels() {
            let panelCollection = this.panelHolder.querySelectorAll('[ ' + this.PANEL_ATTRIBUTE + ']');
            this.panelLength = panelCollection.length;
            for (let a = 0; a < panelCollection.length; a++) {
                let panel = panelCollection[a];
                panel.style += 'display:block;width:100vw;height:100vh;overflow:hidden;position:absolute;left:calc(100vw *' + a + ');top:0;';
            }
            this.panelHolder.style.width = (100 * this.panelLength) + 'vw';
        },
        next() {
            this.index++;
            if (this.index >= this.panelLength) {
                this.index = this.panelLength - 1;
                return;
            }
            this.setContainerX();
        },
        previous() {
            this.index--;
            if (this.index < 0) {
                this.index = 0;
                return;
            }
            this.setContainerX();
        },
        setContainerX() {
            this.panelHolder.style.transform = 'translateX(' + (-(100 * this.index)) + 'vw)';
        },
        setInstance() {
            window.PanelContainer = {
                next: this.next.bind(this),
                previous: this.previous.bind(this)
            }
        }
    };

    PanelContainer.init();
})();
