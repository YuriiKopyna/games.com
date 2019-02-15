class ContentList {
    constructor (contentUrl, renderContainer) {
        fetch(contentUrl)
            .then(result => content.json())
            .then(products => {
                this.content = content;
                this.renderContent(renderContainer, content);
                this.addEventListeners();
            })
    }
    getContentById(id) {
        return this.content.find(el => el.id === id);
    }
    renderContent(container, content) {
        let contentListDomString = ''
        content.forEach(content => {
            contentListDomString += 
            `<div class="game">
                <div class="imagetext">
                    <div class="inform">
                    <a class="link-td-none">
                    </a><img src="images/${product.image}" alt="${content.title}" class="m-img"></a> 
                    <div class="m-desc">
						<div>      
                    <b>Описання: </b>${product.description}</div>
						</div>
						<div class="m-desc1">
							<button class="mata">Скачати торрент</button>
								</div>
							</div>
						</div>
					</div>`;
        });
        container.html(contentListDomString);
    }
    addEventListeners() {
        $('#game').on('show.bs.modal', event => {
            const button = $(event.relatedTarget); // Button that triggered the modal
            const id  = String(button.data('id')); // Extract info from data-* attributes
            const content = this.getContentById(id);
            const modal = $('#game');
            modal.find('.imagetext .m-img')
                .attr('src', 'images/'+product.image)
                .attr('alt', content.title);
            modal.find('.imagetext .inform .m-title').text(content.title);
            modal.find('.imagetext .m-desc').text(content.description);
            modal.find('button.download')
                .text(`${content.link} - Скачати`)
                .data('.m-desc1 .mata', id);
        });
    }
}
                    
                    
                    
                
        


