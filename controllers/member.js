const Member = require("../models/Member")

module.exports.getMembers = () => {
    return Member.find({}).then(resultFromFind =>{
        return resultFromFind
    })
}

module.exports.getMember = (params) => {
    return Member.findById(params.id).then(resultFromFind =>{
        return resultFromFind
    })
}

module.exports.addMember = (member) => {
    let newMember = new Member({
        profile_pic: member.profile_pic,
        first_name: member.first_name,
        last_name: member.last_name,
        email: member.email,
        age: member.age,
        birthDate: member.birthDate
    })

    return newMember.save().then((member,err) => {
        return (err) ? false : true
    })
}

module.exports.editMember = (params, member) => {
    // console.log(id)
    // console.log(member)
    
 
    return Member.findByIdAndUpdate(params.id).then(resultFromFindByIdAndUpdate => {
        resultFromFindByIdAndUpdate.profile_pic = member.profile_pic;
        resultFromFindByIdAndUpdate.first_name = member.first_name;
        resultFromFindByIdAndUpdate.last_name = member.last_name;
        resultFromFindByIdAndUpdate.age = member.age;
        resultFromFindByIdAndUpdate.birthDate = member.birthDate;

        return resultFromFindByIdAndUpdate.save().then((resultFromSaveChanges, err)=> { return (err) ? false : true })
    })
}

module.exports.deleteMember = (params) => {
        
    console.log(params)
    return Member.findByIdAndDelete(params.id, function(err, docs){
    
        if(!err){
            console.log("Deleted: "+ docs)
            
        } else {
            console.log(err)
          
        }
    })

    
}

