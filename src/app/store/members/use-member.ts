import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from "@/app/store/store";
import {fetchMember, selectMember, selectMemberStatus} from "@/app/store/members/members-slice";

const useMember = (memberId: string) => {

    const dispatch = useDispatch<typeof store.dispatch>();
    const member = useSelector(selectMember(memberId));
    const memberStatus = useSelector(selectMemberStatus(memberId));

    useEffect(() => {
        if (memberStatus === 'idle') {
            dispatch(fetchMember(memberId));
        }
    }, [memberId]);

    return {
        member,
        status: memberStatus,
    };
};

export default useMember;
