import { createContext } from "react"

export const TechContext = createContext()
export const JobContext = createContext()
export const MessageContext = createContext()
export const LoadingContext = createContext()

export const TechProvider = TechContext.Provider
export const JobProvider = JobContext.Provider
export const MessageProvider = MessageContext.Provider
export const LoadingProvider = LoadingContext.Provider