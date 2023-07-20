import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import axios from "axios";
import AvatarLogo from "../assets/images/user_avatar.svg";
import AttachmentIcon from "../assets/images/ico_attachment.svg";
import Typo from "../stories/Typo";

const LeaveDetails = () => {
  const [empleavedetail, setEmpleavedetail] = useState([]);
  const [reqdate, setReqdate] = useState([]);

  const params = useParams();
  const userid = params.leaveId;

  useEffect(() => {
    axios.get(`${window.baseUrl}/${window.devEnv}/${window.apiLeave}/manage-leave`)
    .then(res => {
      setEmpleavedetail(res.data.data);
    }, [])
    .catch(err => {
      console.log(err);
    })
  }, []);

  //function changeTimeZone() {
    // Timezone
    // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // console.log('My timezone is: ' + timezone);
    // // ====
    // //const str = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' });
    // const str = new Date().toJSON().slice(0, 100);
    // const convertedtime = str.toLocaleString('en-US', {
    //   timeZone: timezone,
    //   dateStyle: 'full',
    //   timeStyle: 'full',
    // });
    // console.log("This is the converted time string: " + convertedtime);
    // let dt = new Date(convertedtime);
    // let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
    // let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(dt);
    // let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);
    // let tm = new Intl.DateTimeFormat('en', { timeStyle: 'short' }).format(dt);
    // let displaycurrentdate = `${da}` + ' ' + `${mo}` + ', ' + `${ye}` + ' ' + `${tm}`;
    // console.log(displaycurrentdate);
  //}

  //document.getElementById("demo").innerHTML = changeTimeZone();

  return(
    <div className="leavedetails">
      <div className="leavedetails__wrap">

        {empleavedetail && empleavedetail.length ? empleavedetail.map((val) => (
          ((userid === val.lid) &&

          (() => {
            function addHours(numOfHours, date = new Date()) {
              const dateCopy = new Date(date.getTime());
              dateCopy.setTime(dateCopy.getTime() + numOfHours * 60 * 60 * 1000);
              return dateCopy;
            }
            console.log(addHours(5.5, new Date('2019-05-05T10:30:00Z')));
          }, []) &&
          
            <div className="leavedetails__frame mt-24" key={val.lid}>
              <div  className="leavedetails__frame-wrap p-24">
                
                <div className="leavedetails__edetails">
                  <Typo
                    customclass={['leavedetails__created-txt', 'd-block', 'color-neutral-800', 'mb-16', ''].join(' ')}
                    label="Created by"
                    size="md"
                    weight="semibold"
                  />
                  <div className="leavedetails__prof">
                    <div className="leavedetails__edet d-flex">
                      <img src={AvatarLogo} className="leavedetails__prof-img mr-16" height="56" width="56" />
                      <div className="leavedetails__edet__wrap">
                        <Typo
                          customclass={['leavedetails__edet-txt', 'd-block', 'color-base-900', ''].join(' ')}
                          label={val.en}
                          size="xl"
                          weight="semibold"
                        />
                        <span className="hide">
                          <Typo
                            customclass={['leavedetails__profession-txt', 'd-block', 'color-neutral-500', ''].join(' ')}
                            label="UX design"
                            size="sm"
                            weight="normal"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="leavedetails__frame__col leavedetails__frame__col--lstatus">
                      {((val.lst === 'Pending') &&
                        <Typo
                          label="This leave request is pending"
                          size="xs"
                          weight="normal"
                          customclass={["color-neutral-500", 'status--pending', ''].join(' ')}
                        />
                      )}
                      {((val.lst === 'APPROVED') &&
                        <Typo
                          label="This leave request is approved"
                          size="xs"
                          weight="normal"
                          customclass={["color-neutral-500", 'status--approved', ''].join(' ')}
                        />
                      )}
                      {((val.lst === 'REJECTED') &&
                        <Typo
                          label="This leave request is rejected"
                          size="xs"
                          weight="normal"
                          customclass={["color-neutral-500", 'status--rejected', ''].join(' ')}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="leavedetails__details-blk pt-24">
                  <div className="leavedetails__details-grid">
                    <div className="leavedetails__details-col leavedetails__details-col--short">
                      <Typo
                        label="Leave type"
                        size="md"
                        weight="semibold"
                        customclass={["color-neutral-800", "d-block", ''].join(' ')}
                      />
                      <Typo
                        label={val.lty.replace(/\b\w/g, l => l.toUpperCase()) + " leave"}
                        size="md"
                        weight="normal"
                        customclass={["color-neutral-600", "d-block", "mt-4", ''].join(' ')}
                      />
                    </div>
                    <div className="leavedetails__details-col leavedetails__details-col--long pr-40">
                      <Typo
                        label="Reason"
                        size="md"
                        weight="semibold"
                        customclass={["color-neutral-800", "d-block", ''].join(' ')}
                      />
                      <Typo
                        label={val.ldc}
                        size="md"
                        weight="normal"
                        customclass={["color-neutral-600", "d-block", "mt-4", ''].join(' ')}
                      />
                    </div>
                    <div className="leavedetails__details-col leavedetails__details-col--short">
                      <Typo
                        label="Period"
                        size="md"
                        weight="semibold"
                        customclass={["color-neutral-800", "d-block", ''].join(' ')}
                      />
                      <Typo
                        label={"From " + val.lsd + " to " + val.led}
                        size="md"
                        weight="normal"
                        customclass={["color-neutral-600", "d-block", "mt-4", ''].join(' ')}
                      />
                    </div>
                    <div className="leavedetails__details-col leavedetails__details-col--long pr-40">
                      <Typo
                        label="Day(s)"
                        size="md"
                        weight="semibold"
                        customclass={["color-neutral-800", "d-block", ''].join(' ')}
                      />
                      <Typo
                        label={val.nod}
                        size="md"
                        weight="normal"
                        customclass={["color-neutral-600", "d-block", "mt-4", ''].join(' ')}
                      />
                    </div>
                  </div>
                </div>

                <div className="leavedetails__attachments hide pl-48 pr-48 pt-48">
                  <Typo
                    customclass={['leavedetails__addition-txt', 'd-block', 'color-base-900', ''].join(' ')}
                    label="5 Attachments"
                    size="md"
                    weight="semibold"
                  />
                  <div className="leavedetails__attachment-wrap pt-28">
                    <div className="leavedetails__attachment-item">
                      <div className="leavedetails__attachment-item-wrap">
                        {/* <AmpleIcon icon="document-1" /> */}
                        <img src={AttachmentIcon} className="leavedetails__attachment-img" height="40" width="40" />
                        <div className="leavedetails__attachment-det pl-12">
                          <Typo
                            label="Prescription.pdf"
                            size="sm"
                            weight="normal"
                            customclass={['color-neutral-900', 'd-block', ''].join(' ')}
                          />
                          <Typo
                            label="View PDF"
                            size="sm"
                            weight="light"
                            customclass={['color-neutral-500', 'd-block', ''].join(' ')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leavedetails__attachment-item">
                      <div className="leavedetails__attachment-item-wrap">
                        {/* <AmpleIcon icon="document-1" /> */}
                        <img src={AttachmentIcon} className="leavedetails__attachment-img" height="40" width="40" />
                        <div className="leavedetails__attachment-det pl-12">
                          <Typo
                            label="Prescription.pdf"
                            size="sm"
                            weight="normal"
                            customclass={['color-neutral-900', 'd-block', ''].join(' ')}
                          />
                          <Typo
                            label="View PDF"
                            size="sm"
                            weight="light"
                            customclass={['color-neutral-500', 'd-block', ''].join(' ')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leavedetails__attachment-item">
                      <div className="leavedetails__attachment-item-wrap">
                        {/* <AmpleIcon icon="document-1" /> */}
                        <img src={AttachmentIcon} className="leavedetails__attachment-img" height="40" width="40" />
                        <div className="leavedetails__attachment-det pl-12">
                          <Typo
                            label="Prescription.pdf"
                            size="sm"
                            weight="normal"
                            customclass={['color-neutral-900', 'd-block', ''].join(' ')}
                          />
                          <Typo
                            label="View PDF"
                            size="sm"
                            weight="light"
                            customclass={['color-neutral-500', 'd-block', ''].join(' ')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leavedetails__attachment-item">
                      <div className="leavedetails__attachment-item-wrap">
                        {/* <AmpleIcon icon="document-1" /> */}
                        <img src={AttachmentIcon} className="leavedetails__attachment-img" height="40" width="40" />
                        <div className="leavedetails__attachment-det pl-12">
                          <Typo
                            label="Prescription.pdf"
                            size="sm"
                            weight="normal"
                            customclass={['color-neutral-900', 'd-block', ''].join(' ')}
                          />
                          <Typo
                            label="View PDF"
                            size="sm"
                            weight="light"
                            customclass={['color-neutral-500', 'd-block', ''].join(' ')}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leavedetails__attachment-item">
                      <div className="leavedetails__attachment-item-wrap">
                        {/* <AmpleIcon icon="document-1" /> */}
                        <img src={AttachmentIcon} className="leavedetails__attachment-img" height="40" width="40" />
                        <div className="leavedetails__attachment-det pl-12">
                          <Typo
                            label="Prescription.pdf"
                            size="sm"
                            weight="normal"
                            customclass={['color-neutral-900', 'd-block', ''].join(' ')}
                          />
                          <Typo
                            label="View PDF"
                            size="sm"
                            weight="light"
                            customclass={['color-neutral-500', 'd-block', ''].join(' ')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="leavedetails__log pt-44">
                  <Typo
                    //label={new Date(val.lrd).toUTCString()}
                    label={"Created on: " + new Date(val.lrd).toUTCString()}
                    //label={displaycurrentdate}
                    size="xs"
                    weight="normal"
                    customclass={['color-neutral-400', 'd-block', 'text-right', ''].join(' ')}
                  />
                  <div id="demo"></div>
                  <span className="hide">
                    <Typo
                      label="Updated on 12 Aug, 2022  at 10:45 PM"
                      size="xs"
                      weight="normal"
                      customclass={['color-neutral-400', 'd-block', 'text-right', ''].join(' ')}
                    />
                  </span>
                </div>
              </div>

              <div className="leavedetails__bottom leavedetails__bottom--relative">
                <div className="leavedetails__bottom__wrap">
                  <div className="leavedetails__bottom__status pt-24 pb-0 pl-24 pr-24">
                    <Typo
                      label="Approval status :"
                      size="md"
                      weight="semibold"
                      customclass={['color-neutral-800', 'd-block', ''].join(' ')}
                    />
                    {((val.lst === 'Pending') &&
                      <Typo
                        label="Approval pending"
                        size="md"
                        weight="light"
                        customclass={['color-neutral-600', 'd-block', 'mt-4', ''].join(' ')}
                      />
                    )}
                    {((val.lst === 'APPROVED') &&
                      <Typo
                        label="Approved"
                        size="md"
                        weight="light"
                        customclass={['color-neutral-600', 'd-block', 'mt-4', ''].join(' ')}
                      />
                    )}
                    {((val.lst === 'REJECTED') &&
                      <Typo
                        label="Rejected"
                        size="md"
                        weight="light"
                        customclass={['color-neutral-600', 'd-block', 'mt-4', ''].join(' ')}
                      />
                    )}
                  </div>
                  <div className="leavedetails__bottom__comment p-24">
                    <Typo
                      label="Comment"
                      size="sm"
                      weight="semibold"
                      customclass={['color-neutral-800', 'd-block', ''].join(' ')}
                    />
                    <Typo
                      label={val.cmt}
                      size="sm"
                      weight="light"
                      customclass={['color-neutral-600', 'd-block', 'mt-4', ''].join(' ')}
                    />
                  </div>
                </div> 
              </div>
            </div>
          )
        )) : 
        'No entry found'}

      </div>
    </div>
  );
}

export default LeaveDetails;