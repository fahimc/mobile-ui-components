(function() {
    let MobilePanel = {
        panelHolder: null,
        panelLength:0,
        index:0,
        init() {
            document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
        },
        onLoaded() {
            console.log('loaded');
            this.setPanelHolder();
            this.setPanels();
            this.addListener();
        },
        addListener(){
          document.body.addEventListener('click', function(){
            this.index++;
            this.panelHolder.style.transform = 'translateX(' + (- (100 * this.index)) + 'vw)';
          }.bind(this));
        },
        setPanelHolder() {
            console.log('set');
            this.panelHolder = document.querySelector('panel-container');
            if (!this.panelHolder) return;
            console.log(100 * this.panelLength );
            this.panelHolder.style = 'display:block;position:relative;width:100vw;height:100vh;overflow:hidden;transition: transform 0.5s ease-out;';
        },
        setPanels() {
            let panelCollection = this.panelHolder.querySelectorAll('panel');
            this.panelLength = panelCollection.length;
            for (let a = 0; a < panelCollection.length; a++) {
                let panel = panelCollection[a];
                panel.style = 'display:block;width:100vw;height:100vh;overflow:hidden;position:absolute;left:calc(100vw *' + a + ');top:0;';
                panel.style.backgroundColor = this.getRandomColor();
            }

            this.panelHolder.style.width = (100 * this.panelLength ) + 'vw';
        },
        getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    };

    MobilePanel.init();
})();
