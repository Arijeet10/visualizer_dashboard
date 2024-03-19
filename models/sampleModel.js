import mongoose,{Schema} from "mongoose";

const sampleSchema=new Schema({
    "end_year": String,
    "intensity": Number,
    "sector": String,
    "topic": String,
    "insight": String,
    "url": String,
    "region": String,
    "start_year": String,
    "impact": String,
    "added": String,
    "published": String,
    "country": String,
    "relevance": Number,
    "pestle": String,
    "source": String,
    "title": String,
    "likelihood": Number,
})

const Sample=mongoose.models.Sample || mongoose.model("Sample",sampleSchema);

export default Sample;