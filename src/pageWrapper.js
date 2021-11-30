import React from "react";
import RequestPokemons from './RequestPokemons'

export default function PageWrapper() {
    return (
        <div className="Pokemons container">
            {/*------ Search Label Design -------*/}
            <div className=" row justify-content-end">
                <div id="search1" className="col-md-4 form-group has-feedback">
                    <i class="fas fa-search search-control-feedback"></i>
                    <input type="text" className="search-control" placeholder="search" />
                </div>
            </div>
            {/*---------------------------------- */}

            <div className="row">
                {/*----Filters Stage----------- */}
                <div className="col-md-3">
                    <div className="filter">
                        <p>Filters <i class="fas fa-filter"></i></p>
                    </div>

                    {/*------------Type Filter----------- */}
                    <div className="typeFilter">
                        <div className="Type"><p>Type:</p></div>

                        <div >
                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Bug</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Electric</label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Water</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Ground</label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Fire</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Ice</label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Flying</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Rock</label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Normal</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Gross</label>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Psychic</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Fighting</label>
                                </div>
                            </div>



                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Fairy</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Sinister</label>
                                </div>
                            </div>


                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Dragon</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Steel</label>
                                </div>
                            </div>


                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Plant</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Poison</label>
                                </div>
                            </div>


                            <div className="row justify-content-center">
                                <div className="col-5">
                                    <label><input type="checkbox" /> Ghost</label>
                                </div>
                                <div className="col-5">
                                    <label><input type="checkbox" /> Unknown</label>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/*----------------------------------- */}

                    {/*-------------    Color Filter--------------- */}
                    <div className="colorFilter">
                        <div>
                            <p>Color:</p>
                        </div>
                        <div >
                            <div className="row">
                                <div className="col-2">
                                    <label className="container1" id="c1">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c2">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c3">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c4">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c5">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    <label className="container1" id="c6">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c7">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c8">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c9">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                                <div className="col-2">
                                    <label className="container1" id="c10">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*--------------------------------------------- */}

                    {/*----------------Gender Filter---------------- */}
                    <div className="genderFilter">
                        <form>
                            <p>Gender :</p>
                            <label><input type="radio" name="gender" /> All</label><br />
                            <label><input type="radio" name="gender" /> Male</label><br />
                            <label><input type="radio" name="gender" /> Female</label><br />
                            <label><input type="radio" name="gender" /> Undefined</label>
                        </form>
                    </div>

                    {/*--------------------------------------------- */}
                </div>
                {/*------------------------------------------ */}

                <div className="col-md-9 display">
                    <div className="size" id="1"></div>
                    <div className="size" id="2"></div>
                    <div>
                        <button >Load more</button>
                    </div>
                    <RequestPokemons />
                </div>

            </div>

        </div>
    );
}