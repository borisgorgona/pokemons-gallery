import React from "react";

export default function PageWrapper() {
    return (
        <div>
            <div className=" row justify-content-end">

                <div id="search1" className="col-md-4 form-group has-feedback">
                    <i class="fas fa-search search-control-feedback"></i>
                    <input type="text" className="search-control" placeholder="search" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="Filters"></div>
                    <div className="type"></div>
                    <div className="Color"></div>
                    <div className="Gender"></div>
                </div>
                <div className="col-md-8"></div>
            </div>

        </div>
    );
}