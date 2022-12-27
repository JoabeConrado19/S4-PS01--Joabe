import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { UserReturnSerializer } from "../../serializers/users.serializers"
import AppError from "../../errors/AppError"
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity"
import { IScheduleRequest } from "../../interfaces/schedules"


const createScheduleService = async (userData: IScheduleRequest) => {
    const scheduleRepository = AppDataSource.getRepository(SchedulesUsersProperties)
    const schedule = scheduleRepository.create(userData)


    await scheduleRepository.save(schedule)


    return schedule


}

export default createScheduleService