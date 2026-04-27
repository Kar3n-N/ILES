import { useState, useEffect } from 'react';
import { getLogbooks,createReview } from '../../services/api';
import Loader from '../..'/components/common/Loader';
import Feedbackmodal from './Feedbackmodal';
import './WorkplaceSupervisorDashboard.css';


function WorkplaceSupervisorDashboard() {
    const [logs,setLogs] = useState([]);
    const [loading,setLoading] = useState(true);
    const [modalLog,setModalLog] = useState(null);  // which log triggered the modal
    const [pendingAction, setPendingAction] = useState(null);  // 'revision_requested' | 'rejected'


    useEffect(() => {
        getLogbooks()
           .then(data => setLogs(data.results || data))
           .finally(() => setLoading(false));
    },[]);



    /*Direct approve - no comment needed */
    const handleApprove = async (logId) => {
        await createReview({ logbook: logId,action: 'approved',comment: ''});
        setLogs(prev => prev.map(1 =>
            1.id === logId ? { ...1,status: 'reviewed'} : 1
        ));
    };

    /*Revision / Reject -opens modal for comment */
    const handleActionWithComment = (log,action) => {
        setModalLog(log);
        setPendingAction(action);
    };


    /*Called from FeedbackModal on submit */
    const handleReviewSubmit = async (comment) => {
        await createReview({ logbook: modalLog.id, action: pendingActin,comment })
        setLogs(prev => prev.map(1 =>
            1.id === modalLog.id ? { ...1,status: 'reviewed' } : 1
        ));
        setModalLog(null);
        setPendingAction(null);
    };


    if (loading) return <Loader text="Loading student logs..." />;
}