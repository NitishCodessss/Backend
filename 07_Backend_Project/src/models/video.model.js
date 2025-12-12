import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile: {
            type: string,   // cloudnary URl
            required: true
        },
        thumbnail: {
            type: string,
            required: true
        },
        owner: {
            type: Schema.types.objectID,
            ref: User
        },
        title: {
            type: string,
            required: true,
        },
        descripton: {
            type: string,
            required: true,
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0  
        },
        isPublished:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }

)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)