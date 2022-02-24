
/*
INSERT IN THE CONSOLE OF CHROME



*/


setInterval(
            function() {
            t = $( '.js-actionDelete button' ); // get delete buttons
            for ( i = 0; true; i++ ) { // count removed
            if ( i >= t.length ) { // if removed all currently available
            window.scrollTo( 0, $( document ).height() ); // scroll to bottom of page - loads more
            return
            }
            $( t[i] ).trigger( 'click' ); // click and remove button from dom
            $( 'button.delete-action' ).trigger( 'click' ); // click and remove button from dom
            }
            }, 200000000000
            )