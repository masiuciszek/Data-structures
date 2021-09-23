package main

import (
	"errors"
	"strconv"
)

type Clock struct {
	hour   int
	minute int
}

const minutesPerHour = 60

func New(hour, minute int) Clock {
	return Clock{hour, minute}.Normalize()
}
func (c Clock) Normalize() Clock {
	var hh string
	var mm string
	if c.hour < 10 {
		hh = "0" + strconv.Itoa(c.hour)
	} else {
		hh = strconv.Itoa(c.hour)
	}
	if c.minute < 10 {
		mm = "0" + strconv.Itoa(c.minute)
	} else {
		mm = strconv.Itoa(c.minute)
	}

	hourInt, err := strconv.Atoi(hh)
	if err != nil {
		errors.New("noooo")
	}

	minInt, err := strconv.Atoi(mm)
	if err != nil {
		errors.New("noooo")
	}

	return Clock{hour: hourInt, minute: minInt}
}

func main() {
	r := New(60, 60)
	r.Normalize()

}
