import React, {useState} from "react";
import { Merchants } from "../data/Merchants";
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpenseFilterForm = ({onStatusFilter,onMerchantFilter, onDateFilter}) => {
    const [filters, setFilters] = useState({
        from: "",
        to: "",
        minval: "",
        maxval: "",
        Merchants: "",
        status:"",
    });
   
    const handleInput = (field) => (event) => { 
        const {value} = event.target;
        
        setFilters({
            ...filters, [field]:value,
        });

        switch (field) {
            
            case "from":
                onDateFilter(value, "from");
                break;
            case "to":
                break;
            default:
                break;
        
            case "Merchants":
                onMerchantFilter(value);
                break;
            case "status":
                onStatusFilter(value);
                break;
        };
    };

    return (
        <form>
        <div className="mb-3">
            <label for="startDate"className="bold dashboard-label form-label">From</label>
                <input
                    type="date"
                    className="dashboard-input"
                    id="startDate"
                    onChange={handleInput("from")}/>
        </div>
        <div className="mb-3">
            <label for="endDate" className="bold dashboard-label form-label">To</label>
                <input
                    type="date"
                    className="dashboard-input"
                    id="endDate"
                    onChange={handleInput("to")}/>
        </div>
        <div className="d-flex justify-content-around">
            <div>
                <label for="minVal" className="bold dashboard-label form-label">Min</label>
                    <input
                        type="number"
                        className="dashboard-input"
                        id="minVal"
                        />
            </div>

            <div className="pt-4 mx-2"><p>-</p></div>
               
            <div>
                <label for="maxVal" className="bold dashboard-label form-label">Max</label>
                    <input
                        type="number"
                        className="dashboard-input"
                        id="maxVal"
                        />
            </div>
        </div>
        <div className="mb-3">
            <label className="form-label bold">Merchant</label>
            <select className="form-select">
                <option value=''></option>
                {Merchants.map((Merchants) => {
                    return (<option value={Merchants} key={Merchants}>{Merchants}</option>)
                })};
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label bold text-secondary dashboard-label">Status</label>
                <div className="d-flex">
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="formCheckNew"/>
                        <label class="form-check-label" for="formCheckNew">
                            New
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"  id="formCheckProgress"/>
                        <label class="form-check-label" for="formCheckProgress">
                        In Progress
                        </label>
                    </div>
            
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"  id="formCheckReimbursed"/>
                    <label class="form-check-label" for="formCheckReimbursed">
                        Reimbursed
                    </label>
                </div>   
        </div>
            
    </form>
    )
}

export default ExpenseFilterForm