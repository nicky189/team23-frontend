import React, { Component } from 'react';
import './Metrics.css';

class Metrics extends Component{
    render(){
        return(
            
            <body>
                <div class = "sidenav">
                    <h1>STIM</h1>
                    <ul>
                    <li><a href= "/Home">Home</a></li>
                    <li><a href="/InventoryList">Inventory</a></li>
                    <li><a href= "/Alerts">Alerts</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href= "/SubItem">Add SubItem</a></li>
                    <li><a href= "/Ordering">Ordering</a></li>
                    <li><a class="active" href= "/Metrics">Metrics</a></li>
                    <li><a href="/Settings">Settings</a></li>
                    </ul>
                </div>

                <div class = "top">
                        <div class = "logo">
                            <h1>Metrics</h1>
                        </div>
                </div>

            </body>
        );
    }
}

export default Metrics;