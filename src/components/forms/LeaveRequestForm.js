import React, {useState, useEffect, useRef} from "react";
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';
import axios from "axios";
import Cookies from "universal-cookie";
import AmpleIcon from "../../ample-icon/ample-icon";
import Typo from "../../stories/Typo";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const LeaveRequestForm = () => {
  const [datecount, setDatecount] = useState([]);
  const [leavetype, setLeavetype] = useState([]);
  const [leavebal, setLeavebal] = useState([]);

  let ltype, atype, dcount;

  const cookie = new Cookies();
  const id = cookie.get('id');

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-emp-leave-summary?eid=`+id)
    .then(res => {
      setLeavebal(res.data.data);
    }, [])
    .catch(err => {
      console.log(err);
    })
  }, []);

  let currentDate = new Date().toJSON().slice(0, 10);
  let dt = new Date(currentDate);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dt);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);
  let displayCurrentDate = `${da}` + ' ' + `${mo}` + ', ' + `${ye}`;

  function selectLeaveType() {
    ltype = document.getElementById('reql-type').value;
    let rlwrapper = document.getElementById('rl-wrapper');
    rlwrapper.classList.add('rltype');

    if(ltype == 'medical') {
        let mediinfo = document.getElementById('reqleave-info');
        mediinfo.classList.add('show');
        setLeavetype(ltype);
        if (leavebal.eml <= leavebal.uml) {
          let lreqbtn =  document.getElementById('sendreq');
          lreqbtn.classList.add('disabled');
        } else {
          let lreqbtn =  document.getElementById('sendreq');
          lreqbtn.classList.remove('disabled');
        }
    } else {
      let lreqbtn =  document.getElementById('sendreq');
      let mediinfo = document.getElementById('reqleave-info');
      mediinfo.classList.remove('show');
      lreqbtn.classList.remove('disabled');
    }

    if(ltype == 'casual') {
      setLeavetype(ltype);
      if (leavebal.ecl <= leavebal.ucl) {
        let lreqbtn =  document.getElementById('sendreq');
        lreqbtn.classList.add('disabled');
      } else {
        if (leavebal.ecl <= leavebal.ucl) {
          let lreqbtn =  document.getElementById('sendreq');
          lreqbtn.classList.remove('disabled');
        }
      }
    }

    if(ltype == 'annual') {
      setLeavetype(ltype);
      if (leavebal.eal <= leavebal.ual) {
        let lreqbtn =  document.getElementById('sendreq');
        lreqbtn.classList.add('disabled');
      } else {
        if (leavebal.ecl <= leavebal.ucl) {
          let lreqbtn =  document.getElementById('sendreq');
          lreqbtn.classList.remove('disabled');
        }
      }
    }

    if(ltype == '') {
      let rlwrapper = document.getElementById('rl-wrapper');
      rlwrapper.classList.remove('rltype');
    }
  }

  function selectAwayType() {
    atype = document.getElementById('reql-away').value;
    if(atype == 'full') {
      dcount = '1';
      setDatecount(dcount);
    } else if (atype == 'half') {
      dcount = '0.5';
      setDatecount(dcount);
    }
  }

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection'
    }
  ]);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }

  return(
    <form action="" method="post" id="leeevzform-create" className="leeevzform">
      <div id="rl-wrapper" className="leeevzform__wrapper">
        <div id="reqleave-date" className="leeevzform__section leeevzform__section--date">
          <label className="leeevzform__label">
            <Typo
              label="Request date"
              size="sm"
              weight="normal"
              customclass="color-neutral-800"
            />
            <span className="mandatory">*</span>
          </label>
          <div className="leeevzform__field">
            {/* <input id="reql-date" type="date" placeholder="dd/mm/yyyy" name="date" onChange={selectDate} required /> */}
            <AmpleIcon icon="calendar-1" />
            <Typo
              label="Request date is required"
              size="sm"
              weight="light"
              customclass={["reruired-info color-semintic-g2-600"].join()}
            />

            {/* Date range input start */}
            <input
              //value={`${format(range[0].startDate, "yyyy-MM-dd")} to ${format(range[0].endDate, "yyyy-MM-dd")}`}
              value={`${format(range[0].startDate, "dd MMM, yyyy")}`}
              className="inputBox"
              id="reql-date"
              name="date"
              onClick={ () => setOpen(open => !open)}
              readOnly
            />
            {/* Date range input end */}

            {/* Date range calendar start */}
            <div className="leeevzform__calendar" ref={refOne}>
              {open && 
                <div>
                  <DateRange
                    onChange={(item, close) => (setRange([item.selection]), setOpen(open => !open))}
                    ranges={range}
                    months={1}
                    weekStartsOn={1}
                    showMonthAndYearPickers={false}
                    className="calendarElement"
                    showSelectionPreview={true}
                    showPreview={false}
                    moveRangeOnFirstSelection={true}
                    direction="horizontal"
                  />
                  <div className="todays-date">
                    <Typo
                      label={displayCurrentDate}
                      size="md"
                      weight="light"
                      customclass="color-base-invert"
                    />
                    <Typo
                      label="Today"
                      size="md"
                      weight="light"
                      customclass="color-base-invert"
                    />
                  </div>
                </div>
              }
            </div>
            {/* Date range calendar end */}

          </div>
        </div>
        <div id="reqleave-type" className="leeevzform__section leeevzform__section--type">
          <label className="leeevzform__label">
            <Typo
              label="Leave type"
              size="sm"
              weight="normal"
              customclass="color-neutral-800"
            />
            <span className="mandatory">*</span>
          </label>
          <div className="leeevzform__field">
            <select id="reql-type" name="type" className="leeevzform__field--select" onChange={selectLeaveType} required>
              <option value="">Select leave type...</option>
              <option value="annual">Annual leave</option>
              <option value="casual">Casual leave</option>
              <option value="medical">Medical leave</option>
            </select>
            <AmpleIcon icon="arrow-down-1" />
            <Typo
              label="Leave type is required"
              size="sm"
              weight="light"
              customclass={["reruired-info color-semintic-g2-600"].join()}
            />
          </div>
        </div>
        {((leavetype && leavetype == 'annual' && leavebal.eal <= leavebal.ual) || (leavetype && leavetype == 'casual' && leavebal.ecl <= leavebal.ucl) || (leavetype && leavetype == 'medical' && leavebal.eml <= leavebal.uml)) &&
          <>
            <div id="reqleave-noleave" className="leeevzform__section leeevzform__section--noleave text-center">
              <Typo
                id="rem-noleave"
                label="You have no leaves available."
                size="sm"
                weight="semibold"
                customclass="color-semintic-g3-700"
              />
            </div>
          </>
        }
        {((leavetype && leavetype == 'annual' && leavebal.eal > leavebal.ual) || (leavetype && leavetype == 'casual' && leavebal.ecl > leavebal.ucl) || (leavetype && leavetype == 'medical' && leavebal.eml > leavebal.uml)) &&
          <div id="reqleave-remaining" className="leeevzform__section leeevzform__section--balance">
            {leavetype && leavetype == 'annual' ? 
              (
                <>
                  {datecount == '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking 1 day. You'll have ${(leavebal.eal - leavebal.ual) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                  {datecount != '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking ` + datecount + ` day. You'll have ${(leavebal.eal - leavebal.ual) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                </>
              ) : ''
            } 
            {leavetype && leavetype == 'casual' ?
              (
                <>
                  {datecount == '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking 1 day. You'll have ${(leavebal.ecl - leavebal.ucl) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                  {datecount != '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking ` + datecount + ` day. You'll have ${(leavebal.ecl - leavebal.ucl) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                </>
              ) : ''
            }
            {leavetype && leavetype == 'medical' ?
              (
                <>
                  {datecount == '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking 1 day. You'll have ${(leavebal.eml - leavebal.uml) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                  {datecount != '' &&
                    <Typo
                      id="rem-annual"
                      label={`Taking ` + datecount + ` day. You'll have ${(leavebal.eml - leavebal.uml) - datecount} days left.`}
                      size="sm"
                      weight="normal"
                      customclass="color-primary-700"
                    />
                  }
                </>
              ) : ''
            }
          </div>
        }
        {((leavetype && leavetype == 'annual' && leavebal.eal > leavebal.ual) || (leavetype && leavetype == 'casual' && leavebal.ecl > leavebal.ucl) || (leavetype && leavetype == 'medical' && leavebal.eml > leavebal.uml)) &&
          <div id="reqleave-away" className="leeevzform__section leeevzform__section--away">
            <label className="leeevzform__label">
              <Typo
                label="Away"
                size="sm"
                weight="normal"
                customclass="color-neutral-800"
              />
              <span className="mandatory"></span>
            </label>
            <div className="leeevzform__field--away">
              {console.log("requested date is: " + format(range[0].startDate, "yyyy, MM-dd") + " Actual day is: ")}
              <Typo
                label={(format(range[0].startDate, "dd MMM, yyyy"))}
                // label={new Intl.DateTimeFormat("en-GB", {
                //   year: "numeric",
                //   month: "short",
                //   day: "2-digit"
                // }).format(range[0].startDate.firstSale)}
                size="md"
                weight="normal"
                customclass="color-neutral-800"
              />
              {/* <select id="reql-away" name="away" className="leeevzform__field--select" onChange={selectAwayType}> */}
              {leavetype && leavetype == 'annual' ? 
                <select id="reql-away" name="away" className="leeevzform__field--select disabled" onChange={selectAwayType}>
                  <option value="full">Full day</option>
                  <option value="half">Half day</option>
                </select>
              : 
                <select id="reql-away" name="away" className="leeevzform__field--select" onChange={selectAwayType}>
                  <option value="full">Full day</option>
                  <option value="half">Half day</option>
                </select>
              } 
              <AmpleIcon icon="arrow-down-1" />
            </div>
          </div>
        }
        <div id="reqleave-note" className="leeevzform__section leeevzform__section--note">
          <label className="leeevzform__label">
            <Typo
              label="Reason"
              size="sm"
              weight="normal"
              customclass="color-neutral-800"
            />
            <span className="mandatory">*</span>
          </label>
          <div className="leeevzform__field">
            <textarea id="reql-note" name="comments" rows="4" cols="50" placeholder="Enter a reason" required></textarea>
            <Typo
              label="Reason is required. Minimum 8 Characters needed"
              size="sm"
              weight="light"
              customclass={["reruired-info color-semintic-g2-600"].join()}
            />
          </div>
        </div>
        <div id="reqleave-info" className="leeevzform__section leeevzform__section--info">
          <Typo
            label="Please send your attachments via email to "
            size="md"
            weight="normal"
            customclass="color-semintic-g3-700"
          />
          <a className="leeevzform__section__info" href="mailto:shehani@amplifyn.com">
            <Typo
              label="shehani@amplifyn.com"
              size="md"
              weight="normal"
              customclass="color-semintic-g3-700"
            />
          </a>
        </div>
      </div>
    </form>
  );
}

export default LeaveRequestForm;