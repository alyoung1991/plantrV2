class Api::PlantsController < ApplicationController
    def index
        @plants = Plant.search_query_match(params[:query])
        render :index
    end

    def show
        @plant = Plant.find(params[:id])
        render :show
    end

    def create
        @plant = Plant.new(plant_params)

        if @plant.save
            render :show
        else
            render json: @plant, status: :unprocessable_entity
        end
    end

    def update
        @plant = Plant.find(params[:id])

        if @plant.update(plant_params)
            render json: @plant
        else
            render json: @plant.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @plant = Plant.find(params[:id])
        @plant.destroy
        render json: @plant
    end

    private

    def plant_params
        params.require(:plants).permit(:type, :name, :age, :last_watered)
    end
end